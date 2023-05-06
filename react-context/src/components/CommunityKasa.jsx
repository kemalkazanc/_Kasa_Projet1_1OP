import React, { useState } from "react";

const CommunityKasa = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const onClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section>
      <article className="community__container">
        <div onClick={() => onClick(0)} className="community__visible">
          <h3 className="community__title">Fiabilité</h3>
          <em className={`community__chevron fas fa-chevron-${openIndex === 0 ? 'up' : 'down'}`}></em>
        </div>
        <div className={`community__content ${openIndex === 0 ? "" : "isClosed"}`}>
          <p className="community__description">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
      </article>

      <article className="community__container">
        <div onClick={() => onClick(1)} className="community__visible">
          <h3 className="community__title">Respect</h3>
          <em className={`community__chevron fas fa-chevron-${openIndex === 1 ? 'up' : 'down'}`}></em>
        </div>
        <div className={`community__content ${openIndex === 1 ? "" : "isClosed"}`}>
          <p className="community__description">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      </article>

      <article className="community__container">
        <div onClick={() => onClick(2)} className="community__visible">
          <h3 className="community__title">Service</h3>
          <em className={`community__chevron fas fa-chevron-${openIndex === 2 ? 'up' : 'down'}`}></em>
        </div>
        <div className={`community__content ${openIndex === 2 ? "" : "isClosed"}`}>
          <p className="community__description">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </div>
      </article>

      <article className="community__container">
        <div onClick={() => onClick(3)} className="community__visible">
          <h3 className="community__title">Sécurité</h3>
          <em className={`community__chevron fas fa-chevron-${openIndex === 3 ? 'up' : 'down'}`}></em>
        </div>
        <div className={`community__content ${openIndex === 3 ? "" : "isClosed"}`}>
          <p className="community__description">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      </article>
    </section>
  );
};

export default CommunityKasa;
