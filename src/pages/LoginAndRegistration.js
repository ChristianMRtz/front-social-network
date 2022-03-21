import { Container } from "../components/LoginRegistration/styles";
import { useState } from "react";

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
              <form>
                <h3>Sign in</h3>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Login" />
                <a href="/" className="forgot">
                  Forgot Password?
                </a>
              </form>
            </div>
            <div className="form signupForm">
              <form>
                <h3>Sign up</h3>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Last Name" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <input type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
