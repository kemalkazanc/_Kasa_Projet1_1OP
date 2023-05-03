import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/Home" className="error__link">
        Retourner à la page d'acceuil
      </NavLink>
    </main>
  );
};

export default Error;
