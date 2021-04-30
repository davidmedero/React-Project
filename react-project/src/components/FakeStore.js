import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Fragment } from "react";
import ScrollButton from "./ScrollButton";
import { Content, Heading } from "./Styles";

function FakeStore(props) {
  const [products, setProducts] = useState([]); // Holds all products from API
  const [search, setSearch] = useState(""); // Search Bar state
  const [filteredProducts, setFilteredProducts] = useState([]); // Filters products based on seach input

  // Imports API from online
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  // Post product to Wishlist API
  function addToWishlist(item) {
    let product = {
      name: item.title,
      price: item.price,
      image: item.image,
    };
    axios.post(`https://ironrest.herokuapp.com/wishlist`, {
      product: product,
    });
  }

  //Sort products by Highest price
  function sortByHigh() {
    setProducts(
      [...products].sort((a, b) => {
        return Number(b.price) - Number(a.price);
      })
    );
  }

  //Sort products by Lowest price
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
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, products]);

  //Display on screen
  return (
    <div>
      <Navbar />
      Sort By:
      <button onClick={() => sortByHigh()}>Highest Price</button>
      <button onClick={() => sortByLow()}>Lowest Price</button>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredProducts.map((product, i) => {
        return (
          <div className="fakestoreJsProductContainer">
            <img src={product.image} className="fakestoreJsImages" />
            <div className="fakestoreJsTitle">
              <b>{product.title}</b>
            </div>
            <div className="fakestoreJsPrice">${product.price}</div>
            <div className="fakestoreJsDescription">{product.description}</div>
            <button
              className="fakestoreJsAddButton"
              onClick={() => addToWishlist(product)}
            >
              Add to Wishlist
            </button>
          </div>
        );
      })}
      <div>
        <Fragment>
          <Content />
          <ScrollButton />
        </Fragment>
      </div>
    </div>
  );
}

export default FakeStore;
