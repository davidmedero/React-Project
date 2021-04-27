import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Hello, it's Home</h1>
      <Link to="/FakeStore">Fakestore</Link>
      <Link to="/Makeup">Makeup</Link>
    </div>
  );
}

export default Home;
