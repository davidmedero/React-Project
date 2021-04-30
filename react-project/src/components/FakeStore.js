
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

  //Sort product list by A to Z
  function sortByAtoZ() {
    setProducts(
      [...products].sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
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
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      })
    );
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
    <div className="fakeStore-mainContainer">
      <Navbar />
      <div>
        <h2>Fake Store</h2>
      </div>
      <div className="header-div">
        <img src="https://www.makdigitaldesign.com/wp-content/uploads/2020/04/ecommerceads.jpg" />
      </div>

      <div className="fakeStore-button-div">
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
      </div>
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
