import React, { useState } from "react";
import cloStatIMG from "../images/CloStat/CloStat.png";
import MarkItIMG from "../images/MarkIt/Markit.png";
import PTTIMG from "../images/Paint The Town/Lobby_2.gif";
import ShoperoneIMG from "../images/Shoperone/Shoperone.png";

const Project = () => {
    return (
        <div className="Project" id="project">
            <h1 className="left">Project</h1>
            <div className="right">
                <div className="card clostat projectlogo">
                    <img
                        src={cloStatIMG}
                        alt={"CloStat Landing Page"}
                        className="odd"
                    />
                    <div className="content odd">
                        <div className="title">
                            <h1>CloStat</h1>
                            <a
                                href={"https://github.com/inviswings/CloStat"}
                                target={"_blank"}
                            >
                                <button>Github</button>
                            </a>
                        </div>
                        <p>
                            CloStat is a virtual closet that lets the user keep
                            track of the collection of their clothes. With
                            display of statistics of cloth status and weather
                            data for easier management.
                        </p>
                    </div>
                </div>
                <div className="card markit">
                    <img
                        src={MarkItIMG}
                        alt={"MarkIt Landing Page"}
                        className="even"
                    />
                    <div className="content even">
                        <div className="title">
                            <h1>MarkIt</h1>
                            <a
                                href={"https://github.com/Uye121/Markit"}
                                target={"_blank"}
                            >
                                <button>Github</button>
                            </a>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eius, sunt nam nostrum repellendus deserunt
                            minima, consectetur soluta inventore, alias totam
                            dolore obcaecati temporibus recusandae dolorum
                            assumenda ex eum reprehenderit ipsam?
                        </p>
                    </div>
                </div>

                <div className="card shoperone">
                    <img
                        src={ShoperoneIMG}
                        alt={"Shoperone Landing Page"}
                        className="odd"
                    />
                    <div className="content odd">
                        <div className="title">
                            <h1>Shoperone</h1>
                            <a
                                href={
                                    "https://www.figma.com/proto/N072w32YNeChnCQqdisv6pT1/Shoperone?node-id=178%3A536&scaling=scale-down"
                                }
                                target={"_blank"}
                            >
                                <button>Link</button>
                            </a>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eius, sunt nam nostrum repellendus deserunt
                            minima, consectetur soluta inventore, alias totam
                            dolore obcaecati temporibus recusandae dolorum
                            assumenda ex eum reprehenderit ipsam?
                        </p>
                    </div>
                </div>
                <div className="card ptt">
                    <img
                        src={PTTIMG}
                        alt={"Paint the Town Landing Page"}
                        className="even"
                    />
                    <div className="content even">
                        <div className="title">
                            <h1>Paint the Town</h1>
                            <a
                                href={
                                    "https://github.com/TritonXR/Paint-the-Town"
                                }
                                target={"_blank"}
                            >
                                <button>Github</button>
                            </a>
                        </div>
                        <p>
                            Paint the Town is a social VR experience. Players
                            enter a world devoid of color. Each player can
                            interact with the environment, painting a single
                            color onto the space. As players explore the scene,
                            their colors mix, revealing the intended colors of
                            the world, bringing it to life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
