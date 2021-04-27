import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

function Makeup(props) {
  const history = useHistory();
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
        <div>
          <img src={product.image_link} />
          <div>{product.type}</div>
          <div>{product.name}</div>
          <div>{product.rating}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <button onClick={() => addToWishlist(product)}>
            Add to Wishlist
          </button>
        </div>
      );
    });
  };

  function addToWishlist(product) {
    product.preventDefault();
    axios
      .post(`https://ironrest.herokuapp.com/wishlist`, { product: product })
      .then(history.push(`/`));
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
