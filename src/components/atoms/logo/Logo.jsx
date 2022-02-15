import { useNavigate } from "react-router-dom";
import logo from "../../../common/assets/logo-home.png";
import "./logo.scss"
const Logo = () => {
  let navigate = useNavigate();
  return (
    <>
      <img
        onClick={() => navigate("/")}
        className="logo"
        src={logo}
        alt="logo"
      />
    </>
  );
};

export default Logo;
