import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Fragment } from "react";
import ScrollButton from "./ScrollButton";
import { Content, Heading } from "./Styles";

function Games(props) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(""); // Search Bar state
  const [filteredProducts, setFilteredProducts] = useState([]); // Filters products based on seach input

  useEffect(() => {
    axios.get("https://www.cheapshark.com/api/1.0/deals").then((res) => {
      setProducts(res.data);
    });
  }, []);

  let displayAllProducts = () => {
    return products.map((product) => {
      return (
        <div className="gamesContainer">
          <img src={product.thumb} className="gamesImages" /> <br></br>
          <div className="gamesTitle">
            <b>{product.title}</b>
          </div>
          <div className="gamesPrice">${product.salePrice}</div>
          <br></br>
          <button onClick={() => addToWishlist(product)}>
            Add to Wishlist
          </button>
        </div>
      );
    });
  };

  function addToWishlist(item) {
    let product = {
      name: item.title,
      price: item.salePrice,
      image: item.thumb,
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

  function sortByHigh() {
    setProducts(
      [...products].sort((a, b) => {
        return Number(b.salePrice) - Number(a.salePrice);
      })
    );
  }

  function sortByLow() {
    setProducts(
      [...products].sort((a, b) => {
        return Number(a.salePrice) - Number(b.salePrice);
      })
    );
  }

  //Sort products by Search Input
  useEffect(() => {
    setFilteredProducts(
      products.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, products]);


  return (
    <div className="fakeStore-mainContainer">

      <div>
        <Navbar />
        <h2>Games</h2>
      </div>
      <div className="header-div">
        <img src="http://www.volt.com/uploadedImages/Blog/how_to_get_a_job_as_a_video_game_tester_banner.jpg" />
      </div>



      <div className="sortBy">
        <div>
          <h3>Sort By:</h3>
        </div>
        <div>

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

      {filteredProducts.map((item, i) => {
        return (
          <div className="makeupItemContainer">
            <img src={item.thumb} className="makeupImages" />
            <div className="makeupName">{item.title}</div>
            <div className="makeupPrice">${item.salePrice}</div>
            <button
              className="toyCar-button"
              onClick={() => addToWishlist(item)}
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

export default Games;
