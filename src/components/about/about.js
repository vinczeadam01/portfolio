import React from "react";
import {FaUserAlt} from "react-icons/fa"
import "./about.css"

const About = () => {
    return (
        <section className="container" id="about">
            <h2 className="text-light"><FaUserAlt/></h2>
            <h1>About</h1>
            <div className="bio-container">
                <p>I'm a 21 years old Computer Science student at University of Szeged, 
                    currently doing my fifth semester. I consider myself a junior web 
                    developer who likes to learn about different new technologies.</p>
            </div>
        </section>
    )
}

export default About