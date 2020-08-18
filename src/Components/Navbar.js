import React from "react";
import Logo from "../Logo3.svg";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const navStyle = {
        color: "white",
    };

    return (
        <nav>
            <img src={Logo} className="Logo" alt="" />
            <ul className="NavbarList">
                <ScrollLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Home
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Project
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    About
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Contact
                </ScrollLink>
            </ul>
        </nav>
    );
};

export default Navbar;
