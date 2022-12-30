import React from "react";
import {IoCodeSlash} from "react-icons/io5"
import './projects.css';
import {projectsData} from "./projects-data"


const Projects = () => {
    return (
        <section className="container" id="projects">
            <h2 className="text-light"><IoCodeSlash/></h2>
            <h1>Apps I've built</h1>
            <div className="projects-container">
                {
                    projectsData.map((item) => {
                        return (
                            <a
                            href={item.github}
                            key={item.id}
                            className="project-card"
                            >
                                <img alt="project gallery" src={item.img} />
                                <div className="details">
                                    <p className="text-primary">{item.technology}</p>
                                    <b>{item.name}</b>
                                    <p>{item.bio}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </section>
        
    )
}

export default Projects