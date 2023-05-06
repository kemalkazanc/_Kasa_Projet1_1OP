import React from "react";
import Navigation from "../components/Navigation";
import Error404 from "../components/Error404";

const Error = () => {
  return (
    <div className="error">
      <Navigation />
      <Error404 />
    </div>
  );
};

export default Error;
