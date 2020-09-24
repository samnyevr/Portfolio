import React, { useState } from "react";

const About = () => {
    const [toggle, settoggle] = useState([false, false, false, false]);

    return (
        <div className="About" id="about">
            <h1 className="about-title">About</h1>
            <div className="content">
                <span>
                    Hi, my name is Sam Nye, and I am a front end developer
                    located in San Diego, California. I always have a passion
                    towards design and coding, and I like to blend the two
                    together.
                </span>
                <div className="about-card">
                    <div
                        className="card"
                        onMouseEnter={() =>
                            settoggle([true, false, false, false])
                        }
                        onMouseLeave={() =>
                            settoggle([false, false, false, false])
                        }
                    >
                        <div className="about-card-title">My Speciality</div>
                        {toggle[0] && (
                            <ul className="about-card-content">
                                <li>Front End Development</li>
                                <li>UI/UX Design</li>
                                <li>Virtual Reality Development</li>
                            </ul>
                        )}
                    </div>
                    <div
                        className="card"
                        onMouseEnter={() =>
                            settoggle([false, true, false, false])
                        }
                        onMouseLeave={() =>
                            settoggle([false, false, false, false])
                        }
                    >
                        <div className="about-card-title">My beliefs</div>
                        {toggle[1] && (
                            <ul className="about-card-content">
                                <li>Teamwork is key to success</li>
                                <li>Good designs are seemless</li>
                                <li>VR is the future</li>
                            </ul>
                        )}
                    </div>
                    <div
                        className="card"
                        onMouseEnter={() =>
                            settoggle([false, false, false, true])
                        }
                        onMouseLeave={() =>
                            settoggle([false, false, false, false])
                        }
                    >
                        <div className="about-card-title">My Skills</div>
                        {toggle[3] && (
                            <ul className="about-card-content">
                                <li>HTML, CSS, Javascipt, SCSS</li>
                                <li>C, C#, C++, Java</li>
                                <li>React, Redux</li>
                                <li>Python</li>
                            </ul>
                        )}
                    </div>
                    <div
                        className="card"
                        onMouseEnter={() =>
                            settoggle([false, false, true, false])
                        }
                        onMouseLeave={() =>
                            settoggle([false, false, false, false])
                        }
                    >
                        <div className="about-card-title">My Hobby</div>
                        {toggle[2] && (
                            <ul className="about-card-content">
                                <li>Virtual Reality experience</li>
                                <li>Dungeon and Dragons</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
