import React from "react";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist";
import banner from "./banner.png";
import mystore from "./mystore.png";
import { Fragment } from "react";
import ScrollButton from "./ScrollButton";
import { Content, Heading } from "./Styles";

function Home(props) {
  return (
    <div className="fakeStore-mainContainer">
      <div className="header-div">
        <h1 className="homeHeader">My Wishlist</h1>
        <img src={banner} />
      </div>

      <div className="homeContainer">
        <div className="wishlistContainer">
          <Wishlist />
        </div>

        <div className="allStoreContainer">

          <div className="storesRow">

            <div className="storeContainer">
              <Link to="/FakeStore" className="newItemLink">
                <img
                  className="homePage-storeLogo"
                  src="https://dynamic.brandcrowd.com/asset/logo/a7113a63-6440-47bd-8e20-ce74be61571c/logo?v=4" />{" "}
                <br />
                <h3>Fake Store</h3>
              </Link>
            </div>

            <div className="storeContainer">
              <Link to="/Makeup" className="newItemLink">
                <img
                  className="homePage-storeLogo"
                  src="https://logodix.com/logo/694639.png" /> <br />
                <h3 className="makeupLink">Makeup</h3>
              </Link>
            </div>

          </div>


          <div className="storesRow">

            <div className="storeContainer">
              <Link to="/AccessoriesStore" className="newItemLink">
                <img
                  className="homePage-storeLogo"
                  src="https://www.anglodiamond.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/G/a/Gabriel-14k-Yellow-Gold-Diamond-Wide-Band-Ladies-Ring-LR51159Y45JJ-3.jpg" />{" "}
                <br />
                <h3>Accessories Store</h3>
              </Link>
            </div>

            <div className="storeContainer">
              <Link to="/Games" className="newItemLink">
                <img
                  className="steamImage"
                  src="https://logos-world.net/wp-content/uploads/2020/10/Steam-Logo.png"
                />{" "}
                <br />
                <h3 className="steamGamesLink">Steam Games</h3>
              </Link>
            </div>

          </div>


          <div className="storesRow">

            <div className="storeContainer">
              <Link to="/ShoeStore" className="newItemLink">
                <img
                  className="homePage-storeLogo"
                  src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F04%2Ftyler-the-creator-converse-artist-series-Spencer-McMullen-8.jpg?w=1600&cbr=1&q=90&fit=max" />{" "}
                <br />
                <h3>Shoe Store</h3>
              </Link>
            </div>

            <div className="storeContainer">
              <Link to="/ToyCarStore" className="newItemLink">
                <img
                  src="https://ae01.alicdn.com/kf/HTB1CoJNKr1YBuNjSszhq6AUsFXaC/1-24-LX570-Alloy-Metal-Model-Pull-Back-Toy-Cars-Light-Sound-Diecast-Vehicle-Toys-Car.jpg_q50.jpg"
                  className="homePage-storeLogo"
                />{" "}
                <br />
                <h3 className="toyCarHeader">Toy Car</h3>
              </Link>
            </div>

          </div>


          <div className="storesRow">

            <div className="storeContainer">
              <Link to="/NewStore" className="newItemLink">
                <img
                  src={mystore}
                  className="newstoreImg" /> <br />
                <h3 className="newStoreHeader">Product Tool - Do Not Use</h3>
              </Link>
            </div>

            <div className="storeContainer">
              <Link to="/NewItem" className="newItemLink">
                <img
                  className="homePage-storeLogo"
                  src="https://rlv.zcache.com/add_your_logo_company_name_stamp-r115ff9b2a67e4c31a1f6c41eb3379e57_6y40n_704.jpg?rlvnet=1" />{" "}
                <br />
                <h3 className="addYourOwnLink">Add Your Own Item</h3>
              </Link>
            </div>

          </div>



        </div>
      </div>
      <Fragment>
        <Content />
        <ScrollButton />
      </Fragment>
    </div>
  );
}

export default Home;
