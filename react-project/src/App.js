import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import FakeStore from "./components/FakeStore";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fakestore" component={FakeStore} />
      </Switch>
    </div>
  );
}

export default App;
