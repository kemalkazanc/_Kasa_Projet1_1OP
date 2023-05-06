import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FetchContext } from "../context/FetchContext";

const Carousel = () => {
  const [currentPicture, setCurrentPicture] = useState(0);
  const { appartData } = useContext(FetchContext);
  const { id } = useParams();

  // Récupère les données de l'appartement correspondant à l'ID
  const appart = appartData.find((item) => item.id === id);

  const handleNextPicture = () => {
    setCurrentPicture((prevPicture) => {
      if (prevPicture === appart.pictures.length - 1) {
        return 0;
      } else {
        return prevPicture + 1;
      }
    });
  };

  const handlePreviousPicture = () => {
    setCurrentPicture((prevPicture) => {
      if (prevPicture === 0) {
        return appart.pictures.length - 1;
      } else {
        return prevPicture - 1;
      }
    });
  };

  return (
    <>
      {appart && (
        <article className="carousel">
          <div className="carousel__pictureBox">
            <img
              className="carousel__picture"
              src={appart.pictures[currentPicture]}
              alt=""
            />
            <nav className="carousel__navigation">
              <em
                className="carousel__chevronLeft fas fa-chevron-left"
                onClick={handlePreviousPicture}
              ></em>
              <em
                className="carousel__chevronRight fas fa-chevron-right"
                onClick={handleNextPicture}
              ></em>
              <div className="carousel__Counter">{`${currentPicture + 1} / ${
                appart.pictures.length
              }`}</div>
            </nav>
          </div>
        </article>
      )}
    </>
  );
};

export default Carousel;
