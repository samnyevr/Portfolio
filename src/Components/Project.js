import React from "react";
import clostat_login from "../images/CloStat/LogIn.png";
import clostat_add from "../images/CloStat/Add.png";
import clostat_closet from "../images/CloStat/Closet.png";
import clostat_main from "../images/CloStat/Main.png";
import PTT_Lobby2 from "../images/Paint The Town/Lobby_2.gif";
import Shop_index from "../images/Shoperone/Index.png";
import Shop_loc from "../images/Shoperone/Location.png";
import Shop_prog from "../images/Shoperone/Progress.png";
import Shop_task from "../images/Shoperone/Task.png";
import Shop_trav from "../images/Shoperone/Travel.png";
import Shop_vol from "../images/Shoperone/Volunteer.png";
import Shop_way from "../images/Shoperone/Wayfind.png";
import MarkIt_index from "../images/MarkIt/Index.png";
import MarkIt_load from "../images/MarkIt/Load.png";
import MarkIt_result from "../images/MarkIt/Result.png";
import MarkIt_scan from "../images/MarkIt/Scan.png";
import MarkIt_search from "../images/MarkIt/Search.png";

const Project = () => {
    return (
        <div className="Project" id="project">
            <h1 className="left">Project</h1>
            <div className="right">
                <div className="card">
                    <div className="title">CloStat</div>
                    <ul className="mobile">
                        <img src={clostat_login} />
                        <img src={clostat_main} />
                        <img src={clostat_add} />
                        <img src={clostat_closet} />
                    </ul>
                    <div className="buttons">
                        <button>Desciption</button>
                        <button>Link</button>
                    </div>
                </div>
                <div className="card">
                    <div className="title">MarkIt</div>
                    <ul className="mobile">
                        <img src={MarkIt_index} alt="" />
                        <img src={MarkIt_load} alt="" />
                        <img src={MarkIt_result} alt="" />
                        <img src={MarkIt_scan} alt="" />
                        <img src={MarkIt_search} alt="" />
                    </ul>
                    <div className="buttons">
                        <button>Desciption</button>
                        <button>Link</button>
                    </div>
                </div>
                <div className="card">
                    <div className="title">Paint the Town</div>
                    <ul className="desktop">
                        <img src={PTT_Lobby2} alt="" />
                    </ul>
                    <div className="buttons">
                        <button>Desciption</button>
                        <button>Link</button>
                    </div>
                </div>
                <div className="card">
                    <div className="title">Shoperone</div>
                    <ul className="mobile">
                        <img src={Shop_index} alt="" />
                        <img src={Shop_loc} alt="" />
                        <img src={Shop_prog} alt="" />
                        <img src={Shop_task} alt="" />
                        <img src={Shop_trav} alt="" />
                        <img src={Shop_vol} alt="" />
                        <img src={Shop_way} alt="" />
                    </ul>
                    <div className="buttons">
                        <button>Desciption</button>
                        <button>Link</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
