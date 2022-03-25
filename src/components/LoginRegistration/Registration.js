import api from "../../services/fetch";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../services/redux/actions/actions";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
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
        "/registrations",
        {
          user: {
            email: email,
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: false }
      )
      .then((response) => {
        dispatch(setUser(response.data));
        if (response.data.status === "created") {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log("registration error", error);
        setError("Registration error");
      });
    e.preventDefault();
  };
  return (
    <Container>
      {error && <h1 className="error">{error}</h1>}
      <form onSubmit={handleSubmit}>
        <h3>Sign up</h3>
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
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          required
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
    </Container>
  );
};
