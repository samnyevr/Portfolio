import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Contact from "./Components/Contact";

import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                {/* <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/project" component={Project} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch> */}
                <Home />
                <Project />
                <About />
                <Contact />
            </div>
        </Router>
    );
}

export default App;
