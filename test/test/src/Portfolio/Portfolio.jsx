import React from "react";
import "./Portfolio.css";
import PortfolioComp from "./PortfolioComp";

export default function Portfolio() {
  const portfolioItems = [
    "Web Design",
    "Mobile Design",
    "Logo Design",
    "Web Application Development",
    "Mobile Application Development",
    "PWA Development",
  ];

  return (
    <div className="portfolio-wrapper">
      <h2>Portfolio</h2>
      <PortfolioComp items={portfolioItems}/>
    </div>
  );
}