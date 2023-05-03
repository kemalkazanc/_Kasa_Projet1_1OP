import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FetchContext } from "../context/FetchContext";

const AppartementInformation = () => {
  const { appartData } = useContext(FetchContext);
  const { id } = useParams();

  // Récupère les données de l'appartement correspondant à l'ID
  const appart = appartData.find((item) => item.id === id);

  const etoile = [1, 2, 3, 4, 5];
  return (
    <>
      {appart && (
        <section className="information flexBetween">
          <div className="information__box">
            <h1 className="information__title">{appart.title}</h1>
            <h3 className="information__location">{appart.location}</h3>
            {/* La première partie, {appart.tags && ( est une condition qui vérifie si l'objet
            appart contient une propriété tags. Si c'est le cas, le code suivant sera exécuté,
             sinon il sera ignoré. Il y a un appel à la méthode map qui itère sur chaque élément du tableau tags
             Pour chaque élément tag du tableau, le code crée un élément span.
              */}
            {appart.tags && (
              <div className="information__tags">
                {appart.tags.map((tag) => (
                  <span key={tag} className="information__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="information__aside">
            <div className="information__profile flexAround">
              <p className="information__name">{appart.host.name}</p>
              <img
                className="information__profileImage"
                src={appart.host.picture}
                alt="Photo de Profile"
              />
            </div>
            <div className="information__star">
              {/* Idem que au-dessus mais cette fois pour rating */}
              {etoile.map((value) => {
                if (value <= appart.rating) {
                  return <em key={value} className="fas fa-star colored"></em>;
                } else {
                  return <em key={value} className="fas fa-star"></em>;
                }
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AppartementInformation;
