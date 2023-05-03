import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Banner />
        <Card />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
