import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function NewStore(props) {
  let [newProduct, setNewProduct] = useState({ product: {} });
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/ShoeStore`)
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  function handleChange(e) {
    e.persist();
    newProduct.product[e.target.name] = e.target.value;
    setNewProduct(newProduct);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("https://ironrest.herokuapp.com/ShoeStore", newProduct);
  }


  let displayAllProducts = () => {
    return products.map((item, i) => {
      return (
        <div className="toyCar-container">
          <img src={item.product.image} className="toyCar-img" />
          <div className="toyCar-name">
            <b>{item.product.name}</b>
          </div>
          <div className="toyCar-price">${item.product.price}</div>
          <button
            className="toyCar-button"
            onClick={() => removeProduct(item)}
          >
            Remove
      </button>
        </div>
      );
    });
  };

  //Removes single product from Wishlist
  let removeProduct = (item) => {
    console.log(item);
    axios
      .delete(`https://ironrest.herokuapp.com/ShoeStore/${item._id}`)
      .then(() => refreshPage());
  };

  //Reloads the page
  function refreshPage() {
    axios.get(`https://ironrest.herokuapp.com/ShoeStore`).then((res) => {
      setProducts(res.data);
    });
  }



  //Display on screen
  return (
    <div>
      <div className="newProduct-mainContainer">
        <div className="navbar">
          <Navbar />
          <h2>Push Product to NEW STORE</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="neItemt-nameContainer">
            <label>Product Name:</label> <br />
            <input type="text" name="name" onChange={handleChange}></input> <br />
          </div>

          <div className="newItem-priceContainer">
            <label>Price:</label> <br />
            <input type="text" name="price" onChange={handleChange} />
            <br />
          </div>

          <div className="newItem-priceContainer">
            <label>Image URL:</label> <br />
            <input type="text" name="image" onChange={handleChange} />
            <br />
          </div>

          <button className="newItem-button" type="submit" value="Submit">
            Add New
        </button>
        </form>
      </div>

      <div>
        {displayAllProducts()}
      </div>
    </div>
  );
}

export default NewStore;
