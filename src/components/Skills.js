import React from "react";
import "../App.css";
import { Div } from "../elements/Div";
import "./About.css";

export const Skill = () => {
  const skills = [
    "Java",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Spring Boot",
    "Micronaut",
    "ExpressJS",
    "Node",
  ];

  return (
    <Div>
      <div className="container" id="Skills">
        <h1 className="skill">Skills</h1>
        <div className="row">
          <div className="col__2">
            <div className="d__flex" id="skill_list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <h2>{skill}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};
