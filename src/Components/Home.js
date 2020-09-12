import React from "react";
import { Link as ScrollLink } from "react-scroll";

import Logo from "../images/Logo 3 slight white.svg";

const Home = () => {
    return (
        <div className="Home" id="home">
            <div className="Logo">
                <img src={Logo} alt="" />
                <h5>&nbsp;Sam Nye VR</h5>
            </div>
            <div className="desc">
                <span id="firstLine">
                    <h1>I am&nbsp;</h1>
                    <h1 className="myName">Sam Nye&nbsp;</h1>
                    <h1 className="myRole">the VR guy</h1>
                </span>
                <span id="secondLine">
                    <h2>I work to make dreams&nbsp;</h2>
                    <h2 className="fall">come true</h2>
                </span>
            </div>
            <div className="buttons">
                <ScrollLink
                    className="ScrollLink"
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <button className="work">View My Works</button>
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
                    <button className="contact">Contact Me</button>
                </ScrollLink>
            </div>
        </div>
    );
};

export default Home;
