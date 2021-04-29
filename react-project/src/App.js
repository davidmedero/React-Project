import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import FakeStore from "./components/FakeStore";
import Makeup from "./components/Makeup";
import NewItem from "./components/NewItem";
import NewStore from "./components/newStore";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fakestore" component={FakeStore} />
        <Route exact path="/Makeup" component={Makeup} />
        <Route exact path="/NewItem" component={NewItem} />
        <Route exact path="/NewStore" component={NewStore} />
      </Switch>
    </div>
  );
}

export default App;
