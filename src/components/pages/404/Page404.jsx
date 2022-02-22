import GlitchButton from "../../atoms/glitch-button/GlitchButton";
import goToHome from "../../../common/assets/gotohome.png";
import { useNavigate } from "react-router-dom";
import "./page404.scss";
import { cutString } from '../../../services/helpers';
const Page404 = () => {
  let navigate = useNavigate();
  const getPath = () => window.location.pathname.toUpperCase();
  return (
    <section className="page404">
      {/* <h1 className="page404__title">404</h1> */}
      <h1 className="page404__title" data-text="404">404</h1> 

      <p className="page404__subtitle">{cutString(getPath(),10)} NOT FOUND</p>
      <img src={goToHome} alt="goToHome" />
      <GlitchButton text="BACK HOME" onclick={() => navigate("/")} />
    </section>
  );
};

export default Page404;
