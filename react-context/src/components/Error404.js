import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <main className="error404">
      <h1 className="error404__status">404</h1>
      <h2 className="error404__txt">Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/Home" className="error404__link">
        Retourner à la page d'acceuil
      </NavLink>
    </main>
  );
};

export default Error404;
