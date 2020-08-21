import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
    return (
        <div className="Home" id="home">
            <span className="desc">
                <h1>
                    I am&nbsp;
                    <h1 style={{ fontSize: "100px", display: "inline" }}>
                        Sam Nye
                    </h1>{" "}
                    <h1 style={{ textAlign: "center" }}>the VR guy</h1>
                </h1>
                <h1> I work to make dreams come true</h1>
            </span>
            <div className="buttons">
                <button className="work">View My Work</button>
                <button className="contact">Contact Me</button>
            </div>
        </div>
    );
};

export default Home;
