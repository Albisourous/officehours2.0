import './App.css';
import React, { Component } from "react";
import { NavBar } from './Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Queue from "./Queue";
import Home from "./Home";
import { Game } from "./Game";
import { About } from "./About";
import Chat from "./Chat";
import { Launcher } from 'react-chat-window'

import firebase from 'firebase/app';
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: "key-here",
  authDomain: "hacktx-queue.firebaseapp.com",
  databaseURL: "https://hacktx-queue.firebaseio.com",
  projectId: "hacktx-queue",
  storageBucket: "hacktx-queue.appspot.com",
  messagingSenderId: "id-here",
  appId: "id-here"
};
firebase.initializeApp(firebaseConfig);

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
