import React, { useState } from "react";

import Axios from "axios";

const Contact = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
        disabled: false,
        emailSent: null,
    });

    const name = state.name;
    const email = state.email;
    const message = state.message;
    const disabled = state.disabled;
    const emailSent = state.emailSent;

    const handleChange = (event) => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setState({
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setState({
            disabled: true,
        });

        Axios.post("http://localhost:3030/api/email", state)
            .then((res) => {
                if (res.data.success) {
                    setState({
                        disabled: false,
                        emailSent: true,
                    });
                } else {
                    setState({
                        disabled: false,
                        emailSent: false,
                    });
                }
            })
            .catch((err) => {
                setState({
                    disabled: false,
                    emailSent: false,
                });
            });
    };

    return (
        <div className="Contact" id="contact">
            <div className="page">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">Contact Me</h1>
                    <div className="info">
                        <div className="name_field">
                            <label for="name">
                                Name
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="email_field">
                            <label htmlfor="email">
                                Email
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="message">
                        <label for="message">
                            Leave A Message
                            <textarea
                                name="message"
                                value={message}
                                onChange={handleChange}
                                rows={6}
                            />
                        </label>
                    </div>
                    <button type="submit" disabled={disabled}>
                        Submit
                    </button>
                    {emailSent === true && (
                        <p className="success-msg">Email Sent</p>
                    )}
                    {emailSent === false && (
                        <p className="err-msg">Email Not Sent</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
