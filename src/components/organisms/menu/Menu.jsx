import "./menu.scss";
import exit from "../../../common/assets/exit.png";
import {  useNavigate } from "react-router-dom";
import { deleteToLocalStorage } from "../../../services/session";

const Menu = ({ user, isActivate, setIsActivate }) => {
  const navigate = useNavigate();
  const redirect = (to) => {
    if ("/login" === to) deleteToLocalStorage();
    navigate(to);
    setIsActivate(false);
  };
  return (
    <>
      {isActivate && (
        <nav data-testid="menu" className="navbar">
          <img
            className="navbar__exit-button"
            onClick={() => setIsActivate(false)}
            src={exit}
            alt="exit-button"
          />
          <img className="navbar__img" src={user.avatar} alt="avatar" />
          <h3 className="navbar__h3">{user.name}</h3>
          <ul>
            <li onClick={() => redirect("/")}>HOME</li>
            <li onClick={() => redirect("favorites")}>FAVORITES</li>
            <li onClick={() => redirect("/login")}>LOGOUT</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Menu;
