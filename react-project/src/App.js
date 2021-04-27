import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import FakeStore from "./components/FakeStore";
import Makeup from "./components/Makeup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fakestore" component={FakeStore} />
        <Route exact path="/Makeup" component={Makeup} />
      </Switch>
    </div>
  );
}

export default App;
