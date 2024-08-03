// src/Header.js
import React from "react";
import "./Header.css";

export default function Header() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-wrapper">
      <h1>Safa Suliman</h1>
      <h2>Web Developer & Translator</h2>
      <button onClick={handleScrollToContact}>Contact Me</button>
    </div>
  );
}
