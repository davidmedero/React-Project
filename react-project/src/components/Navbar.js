import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <div className="navbar-div">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Navbar;
