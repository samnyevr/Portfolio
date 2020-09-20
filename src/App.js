import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Contact from "./Components/Contact";

import "./css/Main.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Project />
            <About />
            <Contact />
        </div>
    );
}

export default App;
