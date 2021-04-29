import React, { useState, useEffect } from "react";
import axios from "axios";

function Wishlist(props) {
  let [wishlist, setWishlist] = useState([]); //Holds all products from API

  // Imports our Wishlist API from online
  useEffect(() => {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      setWishlist(res.data);
    });
  }, []);

  //Displays all products when function is called
  let displayWishlist = () => {
    return wishlist.map((item) => {
      return (
        <div className="makeupItemContainer">
          <img src={item.product.image} className="makeupImages" />
          <div className="makeupName">{item.product.name}</div>
          <div className="makeupPrice">${item.product.price}</div>

          <button
            className="makeupRemoveButton"
            onClick={() => removeProduct(item)}
          >
            Remove Item
          </button>
        </div>
      );
    });
  };

  //Removes single product from Wishlist
  let removeProduct = (item) => {
    axios
      .delete(`https://ironrest.herokuapp.com/wishlist/${item._id}`)
      .then(() => refreshPage());
  };

  //Reloads the page
  function refreshPage() {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      setWishlist(res.data);
    });
  }

  //Clears entire wishlist array
  const clearWishlist = () => {
    return wishlist.map((item) => {
      axios
        .delete(`https://ironrest.herokuapp.com/wishlist/${item._id}`)
        .then(() => refreshPage());
    });
  };

  //Display amount of products in wishlist
  let wishlistQuantity = () => {
    if (wishlist.length > 0) {
      return "Quantity:  " + wishlist.length;
    } else {
      return "Add some products!!!";
    }
  };

  // Calculate Sum of all items - can be combined with below?
  const makeupTotalSum = () => {
    return wishlist.reduce((sum, item) => sum + Number(item.product.price), 0);
  };

  // Display Sum of all items - can be combined with above?
  let totalSum = () => {
    if (wishlist.length > 0) {
      return "Total:  $" + Number(makeupTotalSum()).toFixed(2);
    } else {
      return "Total:  $0";
    }
  };

  //Sort product list by Highest price
  function sortByHigh() {
    setWishlist(
      [...wishlist].sort((a, b) => {
        return Number(b.product.price) - Number(a.product.price);
      })
    );
  }

  //Sort product list by Lowest price
  function sortByLow() {
    setWishlist(
      [...wishlist].sort((a, b) => {
        return Number(a.product.price) - Number(b.product.price);
      })
    );
  }

  //Sort product list by A to Z
  function sortByAtoZ() {
    setWishlist(
      [...wishlist].sort((a, b) => {
        if (a.product.name < b.product.name) {
          return -1;
        }
        if (a.product.name > b.product.name) {
          return 1;
        }
        return 0;
      })
    );
  }

  //Sort product list by Z to A
  function sortByZtoA() {
    setWishlist(
      [...wishlist].sort((a, b) => {
        if (a.product.name > b.product.name) {
          return -1;
        }
        if (a.product.name < b.product.name) {
          return 1;
        }
        return 0;
      })
    );
  }

  //Display on screen
  return (
    <div>
      <div>

        <div className="wishlist-buttons">
          <button onClick={() => { clearWishlist() }} >Clear All</button>
          <span className="wishlistTotal">{wishlistQuantity()}</span>
          <span className="wishlistSum">{totalSum()}</span>
        </div>

        <div className="wishlist-buttons">
          <button onClick={sortByHigh}>Highest Price</button>
          <button onClick={sortByLow}>Lowest Price</button>
          <button onClick={sortByAtoZ}>A to Z</button>
          <button onClick={sortByZtoA}>Z to A</button>
        </div>

      </div>

      {displayWishlist()}
    </div>
  );
}

export default Wishlist;
