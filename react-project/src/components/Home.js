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
                  src="https://www.designevo.com/res/templates/thumb_small/yellow-and-blue-shopping-cart.png" />{" "}
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
                  className="accessoriesLogo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd198o5Z1CCwmG_sKKlmfi4TkxvoyDxYplAQ&usqp=CAU" />{" "}

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
                  src="https://i.pinimg.com/564x/91/33/b2/9133b2e1d4ea8419759371980ff48fad.jpg" />{" "}
                <br />
                <h3>Shoe Store</h3>
              </Link>
            </div>

            <div className="storeContainer">
              <Link to="/ToyCarStore" className="newItemLink">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbrCcrrZnkk2Y01JqUGCwk3EVJnODbP6zsQ&usqp=CAU"
                  className="homePage-storeLogo"
                />{" "}
                <br />
                <h3 className="toyCarHeader">Toy Cars</h3>
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
                  src="https://www.designevo.com/res/templates/thumb_small/black-frame-and-name-jay.png" />{" "}
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
