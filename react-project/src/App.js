import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import FakeStore from "./components/FakeStore";
import Makeup from "./components/Makeup";
import NewItem from "./components/NewItem";
<<<<<<< HEAD
import Games from "./components/Games";
=======
import NewStore from "./components/newStore";
import ToyCarStore from "./components/ToyCarStore";
>>>>>>> de8cc172d0eb5262880c2f9f945213c118cf83af

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fakestore" component={FakeStore} />
        <Route exact path="/Makeup" component={Makeup} />
        <Route exact path="/NewItem" component={NewItem} />
<<<<<<< HEAD
        <Route exact path="/Games" component={Games}/>
=======
        <Route exact path="/NewStore" component={NewStore} />
        <Route exact path="/ToyCarStore" component={ToyCarStore} />
>>>>>>> de8cc172d0eb5262880c2f9f945213c118cf83af
      </Switch>
    </div>
  );
}

export default App;
