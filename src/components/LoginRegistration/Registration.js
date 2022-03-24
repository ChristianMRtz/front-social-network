import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container } from "./styles";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [registrationError, setRegistrationError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    axios
      .post(
        "http://localhost:3000/registrations",
        {
          user: {
            email: email,
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    e.preventDefault();
  };
  return (
    <Container>
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
