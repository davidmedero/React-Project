import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Wishlist(props) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      console.log(res);
      setWishlist(res.data);
    });
  }, []);

  function refreshPage() {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      console.log(res);
      setWishlist(res.data);
    });
  }

  let showWishlist = () => {
    return wishlist.map((item) => {
      return (
        <div>
          <img src={item.product.image_link} />
          <div>{item.product.name}</div>
          <div>{item.product.price}</div>

          <button onClick={() => removeItem(item)}>Remove Item</button>
        </div>
      );
    });
  };

  let removeItem = (item) => {
    axios
      .delete(`https://ironrest.herokuapp.com/wishlist/${item._id}`)
      .then(() => refreshPage());
  };

  return <div>{showWishlist()}</div>;
}

export default Wishlist;
