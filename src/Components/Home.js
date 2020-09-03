import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
    return (
        <div className="Home" id="home">
            <span className="desc">
                <span id="firstLine">
                    <h2>I am&nbsp;</h2>
                    <h1 className="myName">Sam Nye&nbsp;</h1>
                    <h2 className="myRole">the VR guy</h2>
                </span>
                <span id="secondLine">
                    <h2>I work to make dreams&nbsp;</h2>
                    <h2 className="fall">come true</h2>
                </span>
            </span>
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
                    <button className="work">View My Work</button>
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
