import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container } from "./styles";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [registrationError, setRegistrationError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    axios
      .post(
        "http://localhost:3000/sessions",
        {
          user: {
            username: username,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("response", response);
        if (response.data.logged_in === true) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    e.preventDefault();
  };
  return (
    <Container>
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
