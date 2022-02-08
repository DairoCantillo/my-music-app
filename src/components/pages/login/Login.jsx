import AuthenticationService from "../../../services/auth";
import { useEffect } from "react";


const authenticationService = new AuthenticationService();
const Login = () => {
  const handleLogin = () => {
    authenticationService.InitHash();
  };

  return (
    <div className="container">
      <h1>ID:{process.env.REACT_APP_CLIENT_ID}</h1>
      <button onClick={handleLogin}>login to spotify </button>
    </div>
  );
};

export default Login;
