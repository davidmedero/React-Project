import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

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
        <div className="fakestoreJsProductContainer">
          <img src={product.image} className="fakestoreJsImages" />
          <div className="fakestoreJsTitle">{product.title}</div>
          <div className="fakestoreJsPrice">{product.price}</div>
          <div className="fakestoreJsDescription">{product.description}</div>
          <button
            className="fakestoreJsAddButton"
            onClick={() => addToWishlist(product)}
          >
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
      <SearchBar />
      <div>{allProducts()}</div>
    </div>
  );
}

export default FakeStore;
