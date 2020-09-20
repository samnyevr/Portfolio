import React from "react";
import CloStatIMG from "../images/CloStat/CloStat.png";
import MarkItIMG from "../images/MarkIt/Markit.png";
import PTTIMG from "../images/Paint The Town/PPT.png";
import ShoperoneIMG from "../images/Shoperone/Shoperone.png";
import CloStatLogo from "../images/CloStat/CloStat Logo.svg";
import MarkItLogo from "../images/MarkIt/MarkIt Logo.svg";
import ShoperoneLogo from "../images/Shoperone/Shoperone Logo.svg";
import PTTLogo from "../images/Paint The Town/PTT Logo.png";

const Project = () => {
    return (
        <div className="Project" id="project">
            <h1 className="project-title">Project</h1>

            <div className="card clostat projectlogo">
                <img
                    src={CloStatIMG}
                    alt={"CloStat Landing Page"}
                    className="odd desktop demo"
                />
                <img
                    src={CloStatLogo}
                    alt={"CloStat Logo"}
                    className="odd mobile demo"
                />
                <div className="content odd">
                    <div className="title">
                        <h1>CloStat</h1>
                        <a
                            href={"https://github.com/inviswings/CloStat"}
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <button>Github</button>
                        </a>
                    </div>
                    <p>
                        <em>CloStat</em> is a virtual closet that lets the user
                        keep track of the collection of their clothes. With
                        display of statistics of cloth status and weather data
                        for easier management.
                    </p>
                </div>
            </div>
            <div className="card markit">
                <img
                    src={MarkItIMG}
                    alt={"MarkIt Landing Page"}
                    className="even desktop demo"
                />
                <img
                    src={MarkItLogo}
                    alt={"MarkIt Logo"}
                    className="even mobile demo"
                />
                <div className="content even">
                    <div className="title">
                        <h1>MarkIt</h1>
                        <a
                            href={"https://github.com/Uye121/Markit"}
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <button>Github</button>
                        </a>
                    </div>
                    <p>
                        <em>MarkIt</em> is a mobile phone app that allows the
                        user to scan and find reviews about the item they wish
                        to purchase.
                    </p>
                </div>
            </div>

            <div className="card shoperone">
                <img
                    src={ShoperoneIMG}
                    alt={"Shoperone Landing Page"}
                    className="odd desktop demo"
                />
                <img
                    src={ShoperoneLogo}
                    alt={"Shoperone Logo"}
                    className="odd mobile demo"
                />
                <div className="content odd">
                    <div className="title">
                        <h1>Shoperone</h1>
                        <a
                            href={
                                "https://www.figma.com/proto/N072w32YNeChnCQqdisv6pT1/Shoperone?node-id=178%3A536&scaling=scale-down"
                            }
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <button>Link</button>
                        </a>
                    </div>
                    <p>
                        <em>Shoperone</em> is an app designed for senior users
                        when they need an assistance with their daily chores.
                    </p>
                </div>
            </div>
            <div className="card ptt">
                <img
                    src={PTTIMG}
                    alt={"Paint the Town Landing Page"}
                    className="even desktop demo"
                />
                <img
                    src={PTTLogo}
                    alt={"Paint the Town Logo"}
                    className="even mobile demo"
                />
                <div className="content even ">
                    <div className="title">
                        <h1>Paint the Town</h1>
                        <a
                            href={"https://github.com/TritonXR/Paint-the-Town"}
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <button>Github</button>
                        </a>
                    </div>
                    <p>
                        <em>Paint the Town</em> is a social VR experience.
                        Players enter a world devoid of color. Each player can
                        interact with the environment, painting a single color
                        onto the space. As players explore the scene, their
                        colors mix, revealing the intended colors of the world,
                        bringing it to life.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Project;
