import React from "react";
import "./About.css";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/Safa_Suliman.pdf`;
    link.download = "Safa_Suliman.pdf";
    link.click();
  };

  return (
    <div className="about-wrapper">
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
}
