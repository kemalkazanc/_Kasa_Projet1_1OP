import React from "react";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import AppartementInformation from "../components/AppartementInformation";
import Footer from "../components/Footer";
import Collapsible from "../components/Collapsible";

const Appartement = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Carousel />
        <AppartementInformation />
        <Collapsible />
        <Footer />
      </main>
    </div>
  );
};

export default Appartement;
