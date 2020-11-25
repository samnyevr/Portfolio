import React from "react";
import Resume from "../Samuel Nye Resume e.pdf";

const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <h1 className="contact-title">Contact Me</h1>
            <div className="content">
                <ul>
                    <a
                        href="https://www.linkedin.com/in/samuel-nye"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <li>LinkedIn</li>
                    </a>
                    <a
                        href="https://github.com/samnyevr"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <li>Github</li>
                    </a>
                    <a
                        href={Resume}
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <li>Resume</li>
                    </a>
                    <a
                        href="mailto: samuelnyevr@gmail.com"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <li>Email</li>
                    </a>
                    <a
                        href="https://dribbble.com/inviswings"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <li>Dribbble</li>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
