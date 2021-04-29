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
      console.log(item);
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
    return wishlist.reduce(
      (sum, item) => sum + Number(item.product.price),
      0
    );
  };

  // Display Sum of all items - can be combined with above?
  let totalSum = (item) => {
    if (wishlist.length > 0 || wishlist.length > 0) {
      return (
        "Total:  $" +
        (Number(makeupTotalSum())).toFixed(2)
      )
    } else {
      return (
        "Total:  $0"
      )
    }
  };


  //Sort product list by Highest price
  function sortByHigh() {
    setWishlist(
      [...wishlist].sort((a, b) => {
        return Number(b.price) - Number(a.price);
      })
    );
  }

  //Sort product list by Lowest price
  function sortByLow() {
    setWishlist(
      [...wishlist].sort((a, b) => {
        return Number(a.price) - Number(b.price);
      })
    );
  }


  //Display on screen
  return (
    <div>
      <div>
        <button
          onClick={() => {
            clearWishlist();
          }}
        >
          Clear All
        </button>
        <button onClick={sortByHigh}>Highest Price</button>
        <button onClick={sortByLow}>Lowest Price</button>
        <span className="wishlistTotal">{wishlistQuantity()}</span>
        <span className="wishlistSum">{totalSum()}</span>
      </div>

      {displayWishlist()}
    </div>
  );
}

export default Wishlist;
