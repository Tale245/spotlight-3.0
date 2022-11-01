import React from "react";
import headerLogo from "../images/headerLogo.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} />
      <p className="header__link">Мой профиль</p>
      <p className="header__link">Настройки</p>
    </header>
  );
};

export default Header;
