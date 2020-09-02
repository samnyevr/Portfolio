import React from "react";
import clostat_login from "../images/CloStat/LogIn.png";
import clostat_add from "../images/CloStat/Add.png";
import clostat_closet from "../images/CloStat/Closet.png";
import clostat_main from "../images/CloStat/Main.png";

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
                <div className="card website">
                    <div className="title">MarkIt</div>
                    <ul className="mobile">
                        <img src={clostat_login} />
                        <img src={clostat_login} />
                        <img src={clostat_login} />
                    </ul>
                    <div className="buttons">
                        <button>Desciption</button>
                        <button>Link</button>
                    </div>
                </div>
                <div className="card website">
                    <div className="title">Paint the Town</div>
                    <ul className="mobile">
                        <img src={clostat_login} />
                        <img src={clostat_login} />
                        <img src={clostat_login} />
                    </ul>
                    <div className="buttons">
                        <button>Desciption</button>
                        <button>Link</button>
                    </div>
                </div>
                <div className="card">
                    <div className="title">Shoperone</div>
                    <ul className="mobile">
                        <img src={clostat_login} />
                        <img src={clostat_login} />
                        <img src={clostat_login} />
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
