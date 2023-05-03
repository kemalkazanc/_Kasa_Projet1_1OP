import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.png";

const Navigation = () => {
  return (
    <header className="header flexBetween">
      <NavLink to="/">
        <div>
          <img className="navigation__logo" src={Logo} alt="logo Kasa" />
        </div>
      </NavLink>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
