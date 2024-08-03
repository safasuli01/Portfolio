import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <h2>Portfolio</h2>
      <div className="portfolio-list">
        {[
          "Web Design",
          "Mobile Design",
          "Logo Design",
          "Web Application Development",
          "Mobile Application Development",
          "PWA Development",
        ].map((item, index) => (
          <div className="portfolio-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
