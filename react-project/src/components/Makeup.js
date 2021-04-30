import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Fragment } from "react";
import ScrollButton from "./ScrollButton";
import { Content, Heading } from "./Styles";

function Makeup(props) {
  const [products, setProducts] = useState([]); //Holds all products from API
  const [search, setSearch] = useState(""); // Search Bar state
  const [filteredProducts, setFilteredProducts] = useState([]); // Filters products based on seach input

  // Imports API from online
  useEffect(() => {
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  // Post product to Wishlist API
  function addToWishlist(item) {
    let product = {
      name: item.name,
      price: item.price,
      image: item.image_link,
    };
    console.log(product);
    axios.post(`https://ironrest.herokuapp.com/wishlist`, {
      product: product,
    });
  }

  //Sort product list by A to Z
  function sortByAtoZ() {
    setProducts(
      [...products].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    );
  }

  //Sort product list by Z to A
  function sortByZtoA() {
    setProducts(
      [...products].sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      })
    );
  }

  //Sort product list by Highest price
  function sortByHigh() {
    setProducts(
      [...products].sort((a, b) => {
        return Number(b.price) - Number(a.price);
      })
    );
  }

  //Sort product list by Lowest price
  function sortByLow() {
    setProducts(
      [...products].sort((a, b) => {
        return Number(a.price) - Number(b.price);
      })
    );
  }

  //Sort products by Search Input
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, products]);

  //Display on screen
  return (
    <div className="fakeStore-mainContainer">
      <Navbar />
      <div>
        <h2>Makeup Products</h2>
      </div>
      <div className="header-div">
        <img src="https://identity-mag.com/wp-content/uploads/2017/10/category_makeup_840x400-9wmww.jpg" />
      </div>

      <div className="sortBy">
        <div>
          <h3>Sort By:</h3>
        </div>

        <div style={{ width: "100%" }}>
          <div className="wishlist-buttons-container">
            <button className="wishlist-buttons" onClick={sortByHigh}>
              Highest Price
            </button>
            <button className="wishlist-buttons" onClick={sortByLow}>
              Lowest Price
            </button>
            <button className="wishlist-buttons" onClick={sortByAtoZ}>
              A to Z
            </button>
            <button className="wishlist-buttons" onClick={sortByZtoA}>
              Z to A
            </button>
          </div>

          <div className="seachBar-div">
            <input
              className="seachBar"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {filteredProducts.map((product, i) => {
        return (
          <div className="makeupJsProductContainer">
            <img src={product.image_link} className="makeupJsImages" />
            <div className="makeupJsname">
              <b>{product.name}</b>
            </div>
            <div className="makeupJsrating">Rating: {product.rating}</div>
            <div className="makeupJsprice">${product.price}</div>
            <div className="makeupJsdescription">{product.description}</div>
            <button
              className="addToWishlistButton"
              onClick={() => addToWishlist(product)}
            >
              Add to Wishlist
            </button>
          </div>
        );
      })}

      <Fragment>
        <Content />
        <ScrollButton />
      </Fragment>
    </div>
  );
}

export default Makeup;
