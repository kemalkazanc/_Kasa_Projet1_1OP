import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FetchContext } from "../context/FetchContext";

const Card = () => {
  const { appartData } = useContext(FetchContext);

  console.log("mes données card.jsx", appartData);
  return (
    <section className="card__container">
      {appartData.map((appart) => (
        <article key={appart.id}>
          <NavLink to={`/appartement/${appart.id}`} className="card__link">
            <img className="card__img" src={appart.pictures[0]} alt="" />
            <div className="card__galerie"></div>
            <h2 className="card__title">{appart.title}</h2>
          </NavLink>
        </article>
      ))}
    </section>
  );
};

export default Card;
