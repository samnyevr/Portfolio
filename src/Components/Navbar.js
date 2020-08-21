import React from "react";
import Logo from "../images/Logo 3 white small.svg";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="Nav" id="nav">
            <div className="Logo">
                <img src={Logo} alt="" />
            </div>
            <div className="Menu">
                <ScrollLink
                    className="ScrollLink"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <h5>Home</h5>
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
                    <h5>Project</h5>
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
                    <h5>About</h5>
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
                    <h5>Contact</h5>
                </ScrollLink>
            </div>
        </nav>
    );
};

export default Navbar;
