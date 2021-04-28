import React, { useState, useEffect } from "react";
import axios from "axios";

function Wishlist(props) {
  let [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      setWishlist(res.data);
    });
  }, []);

  function refreshMakeupPage() {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      setWishlist(res.data);
    });
  }


  let displayWishlist = () => {
    return wishlist.map((item) => {
      return (
        <div className="makeupItemContainer">
          <img src={item.product.image} className="makeupImages" />
          <div className="makeupName">{item.product.name}</div>
          <div className="makeupPrice">${item.product.price}</div>


          <button
            className="makeupRemoveButton"
            onClick={() => removeMakeup(item)}
          >
            Remove Item
          </button>
        </div>
      );
    });
  };

  let removeMakeup = (item) => {
    axios
      .delete(`https://ironrest.herokuapp.com/wishlist/${item._id}`)
      .then(() => refreshMakeupPage());
  };

  const clearWishlist = () => {
    return wishlist.map((item) => {
      console.log(item);
      axios
        .delete(`https://ironrest.herokuapp.com/wishlist/${item._id}`)
        .then(() => refreshMakeupPage());
    });
  };







  // need to change the if statement
  let wishlistQuantity = () => {
    // if (fakestoreWishlist.length > 0 || wishlist.length > 0) {
    //   return "Quantity:  " + (fakestoreWishlist.length + wishlist.length);
    // } else {
    //   return "Add some products!!!";
    // }
  };




  // Calculate Sum of all items
  const makeupTotalSum = () => {
    return wishlist.reduce(
      (sum, item) => sum + Number(item.product.price),
      0
    );
  };

  // Display Sum of all items
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



  // Sorting by Highest Price
  function sortByHigh() {
    setWishlist(
      [...wishlist].sort((a, b) => {
        return Number(b.price) - Number(a.price);
      })
    );
  }

  // Sorting by Lowest Price
  function sortByLow() {
    setWishlist(
      [...wishlist].sort((a, b) => {
        return Number(a.price) - Number(b.price);
      })
    );
  }

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
