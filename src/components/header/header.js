import React from "react";
import './header.css';
import {AiFillGithub, AiOutlineLinkedin} from "react-icons/ai"
import {SiCodewars} from "react-icons/si"
import Typewriter from 'typewriter-effect';


const Header = () => {


    


    return (
        <header className="container" id="top">
            <div className="typed-container">
                <Typewriter
                    options={{
                        strings: "<h5>Hello, I'm</h5><br/><h2>Adam Vincze</h2><br/><h6>Computer Science Student</h6>",
                        autoStart: true,
                        delay: 100,
                        
                    }}
                />
            </div>
            
            <a className="btn cv-button" href="/images/photo.jpg">DOWNLOAD CV</a>
            <div className="social-links">
                <a href="https://github.com/vinczeadam01" target="_blank" rel="noreferrer" className="btn btn-primary"><AiFillGithub /></a>
                <a href="https://www.codewars.com/users/vinczeadam01" target="_blank" rel="noreferrer" className="btn btn-primary"><SiCodewars /></a>
                <a href="/images/photo.jpg" className="btn btn-primary"><AiOutlineLinkedin /></a>
            </div>
            <div className="my-photo-container">
                <img src="/images/photo.jpg" alt="me"></img>
            </div>
            
        </header>
    )
}

export default Header