import React from "react";
import Logo from "../assets/LogoFooter.png";

const Footer = () => {
  return (
    <footer className="footer__container felxCentre">
      <div className="footer__containerLogo">
        <img className="footer__logo" src={Logo} alt="Logo Kasa" />
      </div>
      <div className="footer__containerDescription">
        <h1 className="footer__description">
          © 2020 Kasa. All rights reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
