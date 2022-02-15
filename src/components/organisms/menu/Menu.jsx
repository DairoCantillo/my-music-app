import "./menu.scss";
import exit from "../../../common/assets/exit.png";
import { Link } from "react-router-dom";
import { deleteToLocalStorage } from "../../../services/session";

const Menu = ({user, isActivate, setIsActivate }) => {
  return (
    <>
      {isActivate && (
        <nav className="navbar">
          <img
            className="navbar__exit-button"
            onClick={() => setIsActivate(false)}
            src={exit}
            alt="exit"
          />
          <img className="navbar__img" src={user.avatar} alt="avatar" />
          <h3 className="navbar__h3">{user.name}</h3>
          <ul>
            <li>
              <Link onClick={()=>setIsActivate(false)} to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link onClick={()=>setIsActivate(false)} to="favorites">
                FAVORITES
              </Link>
            </li>
            <li>
              <Link onClick={()=>setIsActivate(false)} to="user">
                USER
              </Link>
            </li>
            <li>
              <Link onClick={deleteToLocalStorage} to="/login">
                SALIR
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Menu;
