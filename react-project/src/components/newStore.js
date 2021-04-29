import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function NewStore(props) {
  let [newProduct, setNewProduct] = useState({ product: {} });

  function handleChange(e) {
    e.persist();
    newProduct.product[e.target.name] = e.target.value;
    setNewProduct(newProduct);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("https://ironrest.herokuapp.com/accessoriesStore", newProduct);
  }

  //Display on screen
  return (
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
  );
}

export default NewStore;
