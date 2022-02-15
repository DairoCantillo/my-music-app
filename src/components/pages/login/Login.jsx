import AuthenticationService from "../../../services/auth";
import logo from '../../../common/assets/logo.png';
import "./login.scss"

const authenticationService = new AuthenticationService();
const Login = () => {
  const handleLogin = () => authenticationService.InitHash();

  return (
    <section className="login-container">
      <h1 className="login__title">DECA MUSIC</h1>
      <img className="login__image" src={logo} alt="logo" />
      <button onClick={handleLogin} className="login__button">LOGIN</button>
    </section>
  );
};

export default Login;
