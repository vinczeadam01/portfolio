import React from "react";
import './header.css';
import {AiFillGithub, AiOutlineLinkedin} from "react-icons/ai"
import {SiCodewars} from "react-icons/si"
import Photo from "../../assets/photo.jpg"


const Header = () => {
    return (
        <header className="container" id="top">
            <h5>Hello, I'm</h5>
            <h2>Adam Vincze</h2>
            <h5 className="text-light">Computer Science Student</h5>
            <a className="btn cv-button" download>DOWNLOAD CV</a>
            <div className="social-links">
                <a href="https://github.com/vinczeadam01" target="_blank" className="btn btn-primary"><AiFillGithub /></a>
                <a href="https://www.codewars.com/users/vinczeadam01" target="_blank" className="btn btn-primary"><SiCodewars /></a>
                <a className="btn btn-primary"><AiOutlineLinkedin /></a>
            </div>
            <div className="my-photo-container">
                <img src={Photo} alt="my photo"></img>
            </div>
            
        </header>
    )
}

export default Header