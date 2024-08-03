import React from "react";
import "./Portfolio.css";

export default function PortfolioComp  ({ items })  {
  return (
    <div className="portfolio-list">
      {items.map((item, index) => (
        <div
          className={`portfolio-item ${index % 2 === 0 ? "even" : "odd"}`}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};


