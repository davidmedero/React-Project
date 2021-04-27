import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Wishlist(props) {
  const [fakestoreWishlist, setFakestoreWishlist] = useState([]);
  const [makeupWishlist, setMakeupWishlist] = useState([]);

  useEffect(() => {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      console.log(res);
      setMakeupWishlist(res.data);
    });
    axios.get(`https://ironrest.herokuapp.com/wishlist2`).then((res) => {
      console.log(res);
      setFakestoreWishlist(res.data);
    });
  }, []);

  function refreshMakeupPage() {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      console.log(res);
      setMakeupWishlist(res.data);
    });
  }

  function refreshFakestorePage() {
    axios.get(`https://ironrest.herokuapp.com/wishlist2`).then((res) => {
      console.log(res);
      setFakestoreWishlist(res.data);
    });
  }

  let showMakeup = () => {
    return makeupWishlist.map((item) => {
      return (
        <div>
          <img src={item.product.image_link} />
          <div>{item.product.name}</div>
          <div>{item.product.price}</div>

          <button onClick={() => removeMakeup(item)}>Remove Item</button>
        </div>
      );
    });
  };

  let showFakestore = () => {
    return fakestoreWishlist.map((item) => {
      return (
        <div>
          <img src={item.product.image} />
          <div>{item.product.title}</div>
          <div>{item.product.price}</div>

          <button onClick={() => removeFakestore(item)}>Remove Item</button>
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

  return (
    <div>
      {showMakeup()}
      {showFakestore()}
    </div>
  );
}

export default Wishlist;
