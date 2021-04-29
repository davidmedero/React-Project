import React from "react";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist";

function Home(props) {
  return (
    <div>

      <h1 className="homeHeader">My Wishlist</h1>

      <div className="homeContainer">

        <div className="wishlistContainer">
          <Wishlist />
        </div>

        <div className="storeContainer">

          <Link to="/FakeStore" className="fakestoreLinkHome">
            Fakestore
          </Link>

          <Link to="/Makeup" className="makeupLinkHome">
            Makeup
          </Link>

          <Link to="/NewItem" className="newItemLink">Add Your Own Item</Link>

        </div>
      </div>
    </div>
  );
}

export default Home;
