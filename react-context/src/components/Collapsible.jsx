import React, { useState, useContext } from "react";
import { FetchContext } from "../context/FetchContext";
import { useParams } from "react-router-dom";

const Collapsible = () => {
  const [openIndex, setOpenIndex] = useState(-1); // -1 signifie que toutes les divs sont fermées
  const { appartData } = useContext(FetchContext);
  const { id } = useParams();

  // Récupère les données de l'appartement correspondant à l'ID
  const appart = appartData.find((item) => item.id === id);

  const onClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1); // si la même div est cliquée, on la ferme
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      {appart && (
        <section className="collapsible">
          <article className="collapsible__article">
            <div onClick={() => onClick(0)} className="collapsible__visible">
              <h3 className="collapsible__title">Description</h3>
              <em className={`collapsible__chevron fas fa-chevron-${openIndex === 0 ? 'up' : 'down'}`}></em>
            </div>
            {appart.description && (
              <div
                className={`collapsible__container ${openIndex === 0 ? "" : "isClosed"}`}
              >
                <p className="collapsible__content">{appart.description}</p>
              </div>
            )}
          </article>

          <article className="collapsible__article">
            <div onClick={() => onClick(1)} className="collapsible__visible">
              <h3 className="collapsible__title">Équipements</h3>
              <em className={`collapsible__chevron fas fa-chevron-${openIndex === 1 ? 'up' : 'down'}`}></em>
            </div>
            {appart.equipments.length > 0 && (
              <div
                className={`collapsible__container ${openIndex === 1 ? "" : "isClosed"}`}
              >
                {appart.equipments.map((equipements, index) => (
                  <p key={equipements} className="collapsible__content">
                    {equipements}
                  </p>
                ))}
              </div>
            )}
          </article>
        </section>
      )}
    </>
  );
};

export default Collapsible;
