import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";


function Wishlist(props) {
  const [fakestoreWishlist, setFakestoreWishlist] = useState([]);
  const [makeupWishlist, setMakeupWishlist] = useState([]);

  useEffect(() => {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      setMakeupWishlist(res.data);
    });
    axios.get(`https://ironrest.herokuapp.com/wishlist2`).then((res) => {
      setFakestoreWishlist(res.data);
    });
  }, []);

  function refreshMakeupPage() {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      setMakeupWishlist(res.data);
    });
  }

  function refreshFakestorePage() {
    axios.get(`https://ironrest.herokuapp.com/wishlist2`).then((res) => {
      setFakestoreWishlist(res.data);
    });
  }

  let showMakeup = () => {
    return makeupWishlist.map((item) => {
      return (
        <div className="makeupItemContainer">
          <img src={item.product.image_link} className="makeupImages" />
          <div className="makeupName">{item.product.name}</div>
          <div className="makeupPrice">{item.product.price}</div>

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

  let showFakestore = () => {
    return fakestoreWishlist.map((item) => {
      return (
        <div className="fakestoreItemContainer">
          <img src={item.product.image} className="fakestoreImages" />
          <div className="fakestoreTitle">{item.product.title}</div>
          <div className="fakestorePrice">{item.product.price}</div>

          <button
            className="fakestoreRemoveButton"
            onClick={() => removeFakestore(item)}
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

  let removeFakestore = (item) => {
    axios
      .delete(`https://ironrest.herokuapp.com/wishlist2/${item._id}`)
      .then(() => refreshFakestorePage());
  };

  const clearAllFakestore = (item) => {
    return fakestoreWishlist.map((item) => {
      axios
        .delete(`https://ironrest.herokuapp.com/wishlist2/${item._id}`)
        .then(() => refreshFakestorePage());
    });
  };

  const clearAllMakeup = (item) => {
    return makeupWishlist.map((item) => {
      axios
        .delete(`https://ironrest.herokuapp.com/wishlist/${item._id}`)
        .then(() => refreshMakeupPage());
    });
  };

  let wishlistQuantity = () => {
    if (fakestoreWishlist.length > 0 || makeupWishlist.length > 0) {
      return "Total:  " + (fakestoreWishlist.length + makeupWishlist.length);
    } else {
      return "Add some products!!!";
    }
  };

  const fakestoreTotalSum = () => {
    return fakestoreWishlist.reduce((sum, item) => sum + item.product.price, 0);
  };

  const makeupTotalSum = () => {
    return makeupWishlist.reduce((sum, item) => sum + Number(item.product.price), 0);
  };

  let totalSum = (item) => {
    if (fakestoreWishlist.length > 0 || makeupWishlist.length > 0) {
      return (
        "Sum:  " + (Number(fakestoreTotalSum()) + Number(makeupTotalSum())).toFixed(2)
      );
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            clearAllFakestore();
            clearAllMakeup();
          }}
        >
          Clear All
        </button>
        <span className="wishlistTotal">{wishlistQuantity()}</span>
        <span className="wishlistSum">{totalSum()}</span>
      </div>
      {showMakeup()}
      {showFakestore()}
    </div>
  );
}

export default Wishlist;
