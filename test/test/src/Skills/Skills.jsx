import React from "react";
import "./Skills.css";
import { SkillColor } from "./SkillColor";

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 100 },
  { name: "JavaScript", percentage: 75 },
  { name: "React", percentage: 50 },
  { name: "Photoshop", percentage: 25 },
  { name: "Illustrator", percentage: 30 },
];

export default function Skills() {
  return (
    <div className="skills-wrapper">
      <h2>Skills</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{
                  width: `${skill.percentage}%`,
                  backgroundColor: SkillColor(skill.percentage),
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
