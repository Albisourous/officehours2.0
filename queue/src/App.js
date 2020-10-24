import './App.css';
import React, {Component} from "react";
import { NavBar } from './Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Queue} from "./Queue";
import {Home} from "./Home";
import {Game} from "./Game";
import {About} from "./About";

function App() {
  return (
    <React.Fragment>
        <NavBar/>
        <Router>
            <Switch>
                <Route path="/" exact> <Home/></Route>
                <Route path="/home" exact> <Home/></Route>
                <Route path="/queue" exact> <Queue/></Route>
                <Route path="/game" exact> <Game/></Route>
                <Route path="/about" exact> <About/></Route>
            </Switch>
        </Router>
    </React.Fragment>
);
}

export default App;
