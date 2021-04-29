import React from "react";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist";

function Home(props) {
  return (
    <div className="bodyDiv">

      <div className="header-div">
        <h1 className="homeHeader">My Wishlist</h1>
        <img src={"https://previews.123rf.com/images/bestforbest/bestforbest2001/bestforbest200100047/138514486-wishlist-isometric-vector-banner-smartphone-with-a-heart-and-a-list-with-checkmarks-of-favorite-wish.jpg"} />
      </div>

      <div className="homeContainer">

        <div className="wishlistContainer">
          <Wishlist />
        </div>

        <div className="allStoreContainer">

          <div className="storesRow">

            <div className="storeContainer">
              <Link to="/FakeStore" className="fakestoreLinkHome">
                <img src="https://dynamic.brandcrowd.com/asset/logo/a7113a63-6440-47bd-8e20-ce74be61571c/logo?v=4" /> <br />
                <h3>Fake Store</h3>
              </Link>
            </div>

            <div className="storeContainer">
              <Link to="/Makeup" className="makeupLinkHome">
                <img src="https://logodix.com/logo/694639.png" /> <br />
                <h3>Makeup</h3>
              </Link>
            </div>

          </div>

          <div className="storesRow">

            <div className="storeContainer">
              <Link to="/NewItem" className="newItemLink">
                <img src="https://rlv.zcache.com/add_your_logo_company_name_stamp-r115ff9b2a67e4c31a1f6c41eb3379e57_6y40n_704.jpg?rlvnet=1" /> <br />
                <h3>Add Your Own Item</h3>
              </Link>
            </div>

            <div className="storeContainer">
              <Link to="/NewItem" className="newItemLink">
                <img src="https://logos-world.net/wp-content/uploads/2020/10/Steam-Logo.png" /> <br />
                <h3>Steam Games</h3>
              </Link>
            </div>

          </div>

          <div>

            <div className="storeContainer">
              <Link to="/NewStore" className="newItemLink">
                <img src="https://logos-world.net/wp-content/uploads/2020/10/Steam-Logo.png" /> <br />
                <h3>New Store</h3>
              </Link>
            </div>

            <div className="storeContainer">
              <Link to="/ToyCarStore" className="newItemLink">
                <img src="https://ae01.alicdn.com/kf/HTB1CoJNKr1YBuNjSszhq6AUsFXaC/1-24-LX570-Alloy-Metal-Model-Pull-Back-Toy-Cars-Light-Sound-Diecast-Vehicle-Toys-Car.jpg_q50.jpg" /> <br />
                <h3>Toy Car</h3>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
