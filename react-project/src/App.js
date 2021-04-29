import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import FakeStore from "./components/FakeStore";
import Makeup from "./components/Makeup";
import NewItem from "./components/NewItem";
import Games from "./components/Games";
import NewStore from "./components/newStore";
import ToyCarStore from "./components/ToyCarStore";
import ShoeStore from "./components/ShoeStore";
import AccessoriesStore from "./components/AccessoriesStore";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fakestore" component={FakeStore} />
        <Route exact path="/Makeup" component={Makeup} />
        <Route exact path="/NewItem" component={NewItem} />
        <Route exact path="/Games" component={Games} />
        <Route exact path="/NewStore" component={NewStore} />
        <Route exact path="/ToyCarStore" component={ToyCarStore} />
        <Route exact path="/ShoeStore" component={ShoeStore} />
        <Route exact path="/AccessoriesStore" component={AccessoriesStore} />
      </Switch>
    </div>
  );
}

export default App;
