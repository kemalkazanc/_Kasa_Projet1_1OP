import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import CommunityKasa from "../components/CommunityKasa";
import Banner from "../components/Banner";

const About = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Banner />
        <CommunityKasa />
        <Footer />
      </main>
    </div>
  );
};

export default About;
