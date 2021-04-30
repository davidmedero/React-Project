import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import home from "./home.png";

function Navbar(props) {
  return (
    <div>
      <div className="navbar-div">
        <Link className="homeLinkStyle" to="/">
          <img src={home} className="homeIcon" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
