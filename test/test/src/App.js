import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
