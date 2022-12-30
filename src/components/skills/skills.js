import React from "react";
import {HiChip} from "react-icons/hi"
import "./skills.css"
import {skillsData} from "./skills-data"

const Skills = () => {
    
    return (
        <section className="container" id="skills">
            <h2 className="text-light"><HiChip/></h2>
            <h1>Skills & Technologies</h1>
            <div>
                {
                    Object.keys(skillsData).map(category => {
                        return (
                            <div key={category} className="skill-category">
                                <h3 className="font-weight-400">{category}</h3>
                                <div className="skills-container">
                                    {skillsData[category].map(item => {
                                        return (
                                            <div key={item} className="skill-card">
                                                <img alt={item} src={`/images/skills/${item.toLowerCase()}.svg`}></img>
                                                <p>{item}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills