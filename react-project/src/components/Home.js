import React from "react";
import { Link } from "react-router-dom";
import Wishlist from './Wishlist';

function Home(props) {
  return (
    <div>
      <h1>Hello, it's Home</h1>
      <Wishlist />
      <Link to="/FakeStore">Fakestore</Link>
      <Link to="/Makeup">Makeup</Link>
    </div>
  );
}

export default Home;
