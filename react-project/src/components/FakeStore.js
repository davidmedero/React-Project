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
    });
  };

  function addToWishlist(item) {
    console.log(item);
    let product = {
      name: item.title,
      price: item.price,
      image: item.image
    };
    console.log(product);
    axios.post(`https://ironrest.herokuapp.com/wishlist`, {
      product: product,
    });
  }

  function sortByHigh() {
    setProducts(
      [...products].sort((a, b) => {
        return Number(b.price) - Number(a.price);
      })
    );
  }

  function sortByLow() {
    setProducts(
      [...products].sort((a, b) => {
        return Number(a.price) - Number(b.price);
      })
    );
  }

  return (
    <div>
      <Navbar />
      Sort By:
      <button onClick={() => sortByHigh()}>Highest Price</button>
      <button onClick={() => sortByLow()}>Lowest Price</button>
      <div>{allProducts()}</div>
    </div>
  );
}

export default FakeStore;
