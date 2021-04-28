import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Makeup(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  let allProducts = () => {
    return products.map((product, i) => {
      return (
        <div className="makeupJsProductContainer">
          <img src={product.image_link} className="makeupJsImages" />
          <div className="makeupJsname">{product.name}</div>
          <div className="makeupJsrating">{product.rating}</div>
          <div className="makeupJsprice">{product.price}</div>
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

  function addToWishlist(product) {
    axios.post(`https://ironrest.herokuapp.com/wishlist`, { product: product });
  }

  return (
    <div>
      <Navbar />
      <div>Makeup goes here</div>
      <div>{allProducts()}</div>
    </div>
  );
}

export default Makeup;
