import React from "react";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist";

function Home(props) {
  return (
    <div className="bodyDiv">

      <h1 className="homeHeader">My Wishlist</h1>

      <div className="homeContainer">

        <div className="wishlistContainer">
          <Wishlist />
        </div>

        <div className="storeContainer">
          <div>
            <Link to="/FakeStore" className="fakestoreLinkHome">
              <img src="https://dynamic.brandcrowd.com/asset/logo/a7113a63-6440-47bd-8e20-ce74be61571c/logo?v=4" /> <br />
            Fake Store
          </Link>
          </div>

          <div>
            <Link to="/Makeup" className="makeupLinkHome">
              <img src="https://dynamic.brandcrowd.com/asset/logo/a7113a63-6440-47bd-8e20-ce74be61571c/logo?v=4" /> <br />
              Makeup
          </Link>
          </div>

          <div>
            <Link to="/NewItem" className="newItemLink">
              <img src="https://dynamic.brandcrowd.com/asset/logo/a7113a63-6440-47bd-8e20-ce74be61571c/logo?v=4" /> <br />
              Add Your Own Item
              </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
