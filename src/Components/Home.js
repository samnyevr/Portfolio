import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
    return (
        <div className="Home" id="home">
            <div className="ellipse-1"></div>
            <div className="ellipse-2"></div>
            <section className="description-1">I am Sam Nye the VR guy</section>
            <section className="description-2">
                I work to make dreams come true
            </section>
            <div className="ellipse-3"></div>
            <div className="ellipse-4"></div>
            <button className="work">View My Work</button>
            <button className="contact">Contact Me</button>
        </div>
    );
};

export default Home;
