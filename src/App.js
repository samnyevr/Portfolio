import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Contact from "./Components/Contact";

import "./css/Main.css";

function App() {
    return (
        <body className="App">
            <Navbar />
            <Home />
            <Project />
            <About />
            <Contact />
        </body>
    );
}

export default App;
