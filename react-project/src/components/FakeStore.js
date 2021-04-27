import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function FakeStore(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  let allProducts = () => {
    return products.map((product, i) => {
      return (
        <div>
          <img src={product.image} />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <button onClick={() => addToWishlist(product)}>
            Add to Wishlist
          </button>
        </div>
      );
    });
  };
  console.log(products);
  function addToWishlist(product) {
    axios.post(`https://ironrest.herokuapp.com/wishlist2`, {
      product: product,
    });
  }

  return (
    <div>
      <Navbar />
      <div>Fakestore products go here</div>
      <div>{allProducts()}</div>
    </div>
  );
}

export default FakeStore;
