import "./header.scss";
import menu from "../../../common/assets/menu.png";
import logout from "../../../common/assets/logout.png";
import Menu from "../../organisms/menu/Menu";
import {  useNavigate } from "react-router-dom";
import { deleteToLocalStorage } from "../../../services/session";
import { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../atoms/logo/Logo";

const Header = () => {
  let navigate = useNavigate();
  const [isActivate, setIsActivate] = useState(false);
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    deleteToLocalStorage();
    navigate("/login");
  };

  return (
    <>
      <Menu user={user} isActivate={isActivate} setIsActivate={setIsActivate} />
      <header data-testid="header" className="header">
        <img
          className="header__menu--activate"
          onClick={() => setIsActivate(true)}
          src={menu}
          alt="menu"
        />
        <Logo />
        <div className="header__nav">
          <ul>
            <li onClick={() => navigate("/")}>HOME</li>
            <li onClick={() => navigate("favorites")}>FAVORITES</li>
          </ul>
          <div className="header__user">{user.name}</div>
          <img onClick={handleLogout} src={logout} alt="logout" />
        </div>
      </header>
    </>
  );
};

export default Header;
