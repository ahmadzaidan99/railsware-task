import React from "react";
import Header from "../components/header";
import LoginImage from "../assets/images/Login-illustration.png";
import UserIcon from "../assets/images/Shape.png";
import LockIcon from "../assets/images/lock.svg";

const Login = () => {
  return (
    <div className="login-main">
      <div className="login-inside">
        <Header image={LoginImage} text={"Welcome Back!"} />
        <div className="input-container email-input">
          <img src={UserIcon} alt="" />
          <input className="email-focus" placeholder="example@email.com" />
        </div>
        <div className="input-container">
          <img src={LockIcon} alt="" />
          <input type="password" placeholder="password" />
        </div>
        <div className="forgot-password">
          <a href="/forgot">Forgot Password?</a>
        </div>
        <button>Login</button>
        <div className="login-connect">
          <p>Or connect with social</p>
        </div>
        <div className="social-btn">
          <button className="facebook">Facebook</button>
          <button className="google">Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
