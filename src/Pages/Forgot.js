import React from "react";
import Header from "../components/header";
import UserIcon from "../assets/images/Shape.png";
import ForGotImage from "../assets/images/Forgot password illustration.svg";

const Forgot = () => {
  return (
    <div className="login-main">
      <div className="login-inside">
        <Header image={ForGotImage} text={"Forgot Password"} />

        <div className="input-container email-input">
          <img src={UserIcon} alt="" />
          <input className="email-focus" placeholder="example@email.com" />
        </div>
        <button>Reset</button>
        <div className="forgot-login">
          <p>Already have an account? </p>
          <a href="/">Login here</a>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
