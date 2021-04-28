import React, { useState, useEffect } from "react";
import axios from "axios";

function Wishlist(props) {
  let [fakestoreWishlist, setFakestoreWishlist] = useState([]);
  let [makeupWishlist, setMakeupWishlist] = useState([]);
  let [mergedWishlist, setMergedWishlist] = useState([]);

  useEffect(() => {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      setMakeupWishlist(res.data);
    });
  }, []);

  console.log(makeupWishlist);

  function refreshMakeupPage() {
    axios.get(`https://ironrest.herokuapp.com/wishlist`).then((res) => {
      setMakeupWishlist(res.data);
    });
  }

  // function mergeWishlists() {
  //   // setMergedWishlist(
  //   console.log(makeupWishlist);
  //   makeupWishlist.map((item) => {
  //     console.log(item);
  //     return mergedWishlist.push({
  //       name: item.product.name,
  //       price: item.product.price,
  //       image: item.product.image_link,
  //       id: item._id,
  //     });
  //   });

  //   fakestoreWishlist.map((item) => {
  //     console.log(item);

  //     return mergedWishlist.push({
  //       name: item.product.title,
  //       price: item.product.price,
  //       image: item.product.image,
  //       id: item._id,
  //     });
  //   });
  //   console.log(mergedWishlist);
  // }

  let showProducts = () => {
    // mergeWishlists();
    return mergedWishlist.map((item) => {
      console.log(mergedWishlist);
      return (
        <div className="makeupItemContainer">
          <img src={item.image} className="makeupImages" />
          <div className="makeupPrice">{item.price}</div>
          <div className="makeupName">{item.name}</div>
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

  // <img src={item.product.image} className="makeupImages" />
  //         <div className="makeupPrice">{item.product.price}</div>
  //         <div className="makeupName">{item.product.name}</div>

  let showMakeup = () => {
    return makeupWishlist.map((item) => {
      return (
        <div className="makeupItemContainer">
          <img src={item.product.image_link} className="makeupImages" />
          <div className="makeupPrice">{item.product.price}</div>
          <div className="makeupName">{item.product.name}</div>

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

  // let showFakestore = () => {
  //   return fakestoreWishlist.map((item) => {
  //     return (
  //       <div className="fakestoreItemContainer">
  //         <img src={item.product.image} className="fakestoreImages" />
  //         <div className="fakestoreTitle">{item.product.title}</div>
  //         <div className="fakestorePrice">{item.product.price}</div>

  //         <button
  //           className="fakestoreRemoveButton"
  //           onClick={() => removeFakestore(item)}
  //         >
  //           Remove Item
  //         </button>
  //       </div>
  //     );
  //   });
  // };

  let removeMakeup = (item) => {
    axios
      .delete(`https://ironrest.herokuapp.com/wishlist/${item._id}`)
      .then(() => refreshMakeupPage());
  };

  const clearAll = (item) => {
    console.log(mergedWishlist);
    setMergedWishlist([...mergedWishlist].splice(0, mergedWishlist.length));
    // return mergedWishlist.map((item) => {
    //   // axios
    //   //   .delete(`https://ironrest.herokuapp.com/wishlist2/${item._id}`)
    //   //   .then(() => refreshFakestorePage());

    // });
  };

  const clearAllMakeup = () => {
    return makeupWishlist.map((item) => {
      console.log(item);
      axios
        .delete(`https://ironrest.herokuapp.com/wishlist/${item._id}`)
        .then(() => refreshMakeupPage());
    });
  };

  let wishlistQuantity = () => {
    if (fakestoreWishlist.length > 0 || makeupWishlist.length > 0) {
      return "Quantity:  " + (fakestoreWishlist.length + makeupWishlist.length);
    } else {
      return "Add some products!!!";
    }
  };

  //counting price
  const fakestoreTotalSum = () => {
    return fakestoreWishlist.reduce(
      (sum, item) => sum + Number(item.product.price),
      0
    );
  };

  const makeupTotalSum = () => {
    return makeupWishlist.reduce(
      (sum, item) => sum + Number(item.product.price),
      0
    );
  };

  let totalSum = (item) => {
    if (fakestoreWishlist.length > 0 || makeupWishlist.length > 0) {
      return (
        "Total:  $" +
        (Number(fakestoreTotalSum()) + Number(makeupTotalSum())).toFixed(2)
      );
    }
  };

  //sorting
  function sortByHigh() {
    console.log(mergedWishlist);
    setMergedWishlist(
      [...mergedWishlist].sort((a, b) => {
        return Number(b.price) - Number(a.price);
      })
    );
  }

  function sortByLow() {
    setMergedWishlist(
      [...mergedWishlist].sort((a, b) => {
        return Number(a.price) - Number(b.price);
      })
    );
  }

  return (
    <div>
      <div>
        <button
          onClick={() => {
            clearAllMakeup();
          }}
        >
          Clear All
        </button>
        <button onClick={sortByHigh}>Highest Price</button>

        <span className="wishlistTotal">{wishlistQuantity()}</span>
        <span className="wishlistSum">{totalSum()}</span>
      </div>

      {showMakeup()}
    </div>
  );
}

export default Wishlist;
