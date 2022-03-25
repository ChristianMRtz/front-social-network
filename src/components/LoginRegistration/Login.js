import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../services/redux/actions/actions";
import api from "../../services/fetch";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleSubmit = (e) => {
    api
      .post(
        "/sessions",
        {
          user: {
            username: username,
            password: password,
          },
        },
        { withCredentials: false }
      )
      .then((response) => {
        dispatch(setUser(response.data));
        response.data.status === 401 ? setError(response.data.error) : navigate("/home");
      })
      .catch((error) => {
        console.log("Login error: ", error);
      });
    e.preventDefault();
  };
  return (
    <Container>
      {error && <h1 className="error">{error}</h1>}
      <form onSubmit={handleSubmit}>
        <h3>Sign in</h3>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
        <a href="/" className="forgot">
          Forgot Password?
        </a>
      </form>
    </Container>
  );
};
