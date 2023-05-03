import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Appartement from "./pages/Appartement";
import FetchContextProvider from "./context/FetchContext";

const App = () => {
  return (
    <FetchContextProvider>
      <BrowserRouter>
        <Routes>
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appartement/:id" element={<Appartement />} />
          <Route path="/erreur" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </FetchContextProvider>
  );
};

export default App;
