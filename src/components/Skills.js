import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
    { name: "Python", value: 90 },
    { name: "SQL", value: 85 },
    { name: "Power BI", value: 80 },
    { name: "Machine Learning", value: 75 },
    { name: "Data Visualization", value: 70 },
];

const Skills = () => (
    <section id="skills" className="skills">
        <h2>Technical Skills</h2>
        <div className="skill-container">
            {skills.map((skill, index) => (
                <div key={index} className="skill">
                    <CircularProgressbar value={skill.value} text={`${skill.value}%`} />
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
