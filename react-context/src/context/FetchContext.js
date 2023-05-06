import React, { createContext, useEffect, useState } from "react";

export const FetchContext = createContext();

const FetchContextProvider = (props) => {
  const [appartData, setAppartData] = useState([]);
  useEffect(() => {
    fetch("../logements.json")
      .then((response) => response.json())
      .then((data) => setAppartData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <FetchContext.Provider value={{ appartData }}>
      {props.children}
    </FetchContext.Provider>
  );
};

export default FetchContextProvider;
