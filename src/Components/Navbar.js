import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const [navButton, setnavButton] = useState(false);
    const [isShown, setisShown] = useState(false);

    const handleResize = () => {
        if (window.innerWidth <= 769) {
            setnavButton(true);
            return;
        }
        setnavButton(false);
    };

    const handleClick = () => {
        if (navButton) {
            if (!isShown) {
                setisShown(true);
            } else {
                setisShown(false);
            }
        }
    };

    useEffect(() => {
        if (window.innerWidth <= 769) {
            setnavButton(true);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="Nav " id="nav">
            <div className={`${navButton ? "showBtn" : "hideBtn"}`}>
                <div
                    className={`menu-btn ${isShown ? "close" : ""}`}
                    onClick={handleClick}
                >
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
            </div>
            <nav className={`${isShown ? "Show" : "Hide"}`}>
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
        </div>
    );
};

export default Navbar;
