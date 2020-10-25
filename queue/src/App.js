import './App.css';
import React from "react";
import { NavBar } from './Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Queue from "./Queue";
import Home from "./Home";
import Game from "./Game";
import About from "./About";
import Chat from "./Chat";
// import { Launcher } from 'react-chat-window';
// import fire from './Fire';

function App() {

  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact> <Home /></Route>
          <Route path="/home" exact> <Home /></Route>
          <Route path="/queue" exact> <Queue /></Route>
          <Route path="/game" exact> <Game /></Route>
          <Route path="/about" exact> <About /></Route>
        </Switch>
      </Router>
      <Chat></Chat>
    </React.Fragment>
  );
}


export default App;
