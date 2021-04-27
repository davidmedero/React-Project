import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Wishlist from "./Wishlist";

function Home(props) {
  return (
    <div>
      <Navbar />
      <Wishlist />
      <Link to="/FakeStore">Fakestore</Link>
      <Link to="/Makeup">Makeup</Link>
    </div>
  );
}

export default Home;
