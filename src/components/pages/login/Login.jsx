import AuthenticationService from "../../../services/auth";
import logo from "../../../common/assets/logo.png";
import React from "react";
import "./login.scss";
import GlitchButton from "../../atoms/glitch-button/GlitchButton";

const Login = () => {
const authenticationService = new AuthenticationService();

  const handleLogin = () => {
    authenticationService.InitHash();
  };

  return (
    <section className="login-container">
      <h1 className="login__title">DECA MUSIC</h1>
      <img className="login__image" src={logo} alt="logo" />
      <GlitchButton text="LOGIN" onclick={handleLogin}/>
    </section>
  );
};

export default Login;
