import React from "react";
import './navbar.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {SiAtom} from 'react-icons/si'
import {BiBookAlt} from 'react-icons/bi'
import {RiMessage3Line} from 'react-icons/ri'
import { Link } from 'react-scroll';

const navLinks = [
    {to: "top", icon: <AiOutlineHome /> },
    {to: "about", icon: <AiOutlineUser /> },
    {to: "skills", icon: <BiBookAlt /> },
    {to: "experiences", icon: <SiAtom /> },
    {to: "contact", icon: <RiMessage3Line /> },
]

const Navbar = () => {

    

    return (
        <nav>
            {
               navLinks.map((item, i) => {
                return <Link className="nav-bar-link" to={item.to} spy activeClass="nav-bar-link-active" >{item.icon}</Link>
               }) 
            }
        </nav>
    );
}

export default Navbar

/*
<Link className="nav-bar-link" to="top" spy activeClass="nav-bar-link-active" smooth ><AiOutlineHome /></Link>
<Link className='nav-bar-link' to='about' spy activeClass="nav-bar-link-active" smooth ><AiOutlineUser /></Link>
<Link className='nav-bar-link' to='skills' spy activeClass="nav-bar-link-active" smooth ><BiBookAlt /></Link>
<Link className='nav-bar-link' to='experiences' spy activeClass="nav-bar-link-active" smooth ><SiAtom /></Link>
<Link className='nav-bar-link' to='contact' spy activeClass="nav-bar-link-active" smooth ><RiMessage3Line /></Link>
*/