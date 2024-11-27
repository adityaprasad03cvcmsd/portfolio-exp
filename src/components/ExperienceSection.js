import React from "react";
import {
  SlideInRight,
  SlideInUp
} from "react-animated-components";
import "../App.css";
import { Div } from "../elements/Div";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Infinity (YC W24)",
      duration: "Feb,2024 - Present",
      responsibilities: [
        "Designed patterns and collaborated on all phases of the SDLC, encompassing requirements analysis, coding, and deployment.",

        "Introduced agile methodologies to enhance product development efficiency.",

        "Developed frameworks for evaluating performance of software-defined networks.",
      ],
    },
    {
      title: "Software Engineer-I",
      company: "Zet (Previously Onecode)",
      duration: "May,2022 - Feb,2024",
      responsibilities: [
        "Engineered end-to-end design and implementation of transaction flow and bill payment services for frontend and backend.",

        "Built reporting service using SQS to extract and save data from email attachments.",

        "Optimized APIs with backend caching, reducing latency by 85%.",

        "Led microservices construction, transitioning from monolithic to hybrid architecture for scalability.",
      ],
    },
  ];

  return (
    <Div>
      <div className="container" id="Experience">
        <div className="experience_header">
          <SlideInRight durationMs={1000}>
            <h1 className="section_title">Experience</h1>
          </SlideInRight>
        </div>
        <div className="experience_row">
          {experiences.map((exp, index) => (
            <div className="col__2 experience_card" key={index}>
              <SlideInUp durationMs={1000}>
                <h2 className="experience_title">{exp.title}</h2>
                <h3 className="experience_company">
                  {exp.company} / {exp.duration}
                </h3>
                <ul className="experience_list">
                  {exp.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </SlideInUp>
            </div>
          ))}
        </div>
      </div>
    </Div>
  );
};

export default ExperienceSection;
