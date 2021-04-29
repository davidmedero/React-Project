import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Makeup(props) {
  const [products, setProducts] = useState([]); //Holds all products from API

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

  //Displays all products when function is called
  let displayAllProducts = () => {
    return products.map((product, i) => {
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
    });
  };


  // Post product to Wishlist API
  function addToWishlist(item) {
    let product = {
      name: item.name,
      price: item.price,
      image: item.image_link
    };
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


  //Display on screen
  return (
    <div>
      <Navbar />
      Sort By:
      <button onClick={() => sortByHigh()}>Highest Price</button>
      <button onClick={() => sortByLow()}>Lowest Price</button>
      <div>{displayAllProducts()}</div>
    </div>
  );
}

export default Makeup;
