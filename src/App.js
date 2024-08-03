import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

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
