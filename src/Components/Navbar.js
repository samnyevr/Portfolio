import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="Nav" id="nav">
            <ScrollLink
                className="ScrollLink"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <h4>Home</h4>
            </ScrollLink>

            <ScrollLink
                className="ScrollLink"
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <h4>Project</h4>
            </ScrollLink>

            <ScrollLink
                className="ScrollLink"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <h4>About</h4>
            </ScrollLink>

            <ScrollLink
                className="ScrollLink"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <h4>Contact</h4>
            </ScrollLink>
        </nav>
    );
};

export default Navbar;
