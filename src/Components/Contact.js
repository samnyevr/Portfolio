import React from "react";

const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <h1 className="left">Contact</h1>
            <div className="right">
                <form action="/action_page.php">
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Last Name</label>
                        </div>
                        <div class="col-75">
                            <input
                                type="text"
                                id="lname"
                                name="lastname"
                                placeholder="Your last name.."
                            />
                        </div>
                    </div>
                    <div class="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
