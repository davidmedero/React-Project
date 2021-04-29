import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

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
      <div className="navbar">
        <Navbar />
        <h2>Makeup Products</h2>
      </div>

      <div className="fakeStore-button-div">
        <div>
          <h3>Sort By:</h3>
        </div>
        <div>
          <button onClick={() => sortByHigh()}>Highest Price</button>
          <button onClick={() => sortByLow()}>Lowest Price</button>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
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
                  className="makeupJsAddButton"
                  onClick={() => addToWishlist(product)}
                >
                  Add to Wishlist
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Makeup;
