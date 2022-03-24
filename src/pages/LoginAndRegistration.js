import { Container } from "../components/LoginRegistration/styles";
import { useState } from "react";
import { Registration } from "../components/LoginRegistration/Registration";
import { Login } from "../components/LoginRegistration/Login";

export const LoginAndRegistration = () => {
  const [isActive, setIsActive] = useState("");

  const handleClick = (e) => {
    if (e.target.id === "signup") {
      setIsActive("active");
    } else if (e.target.id === "signin") {
      setIsActive("");
    }
  };

  return (
    <Container>
      <div className={"container " + isActive}>
        <div className="content">
          <div className="blueBg">
            <div className="box singin">
              <h2>Already Have an Account?</h2>
              <button className="signinBtn" id="signin" onClick={handleClick}>
                Sign in
              </button>
            </div>
            <div className="box signup">
              <h2>Don't Have an Account?</h2>
              <button className="signupBtn" id="signup" onClick={handleClick}>
                Sign up
              </button>
            </div>
          </div>
          <div className={"formBx " + isActive}>
            <div className="form signinForm">
              <Login />
            </div>
            <div className="form signupForm">
              <Registration />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
