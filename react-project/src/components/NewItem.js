import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function NewItem(props) {
  // Declare object "newItem" with an object "product" inside.
  // Inside object "product" theres a default image url stored
  const [newItem, setNewItem] = useState({
    product: {
      image:
        "https://cdn.pixabay.com/photo/2017/10/18/14/31/box-2864335_960_720.png",
    },
  });

  //Takes user input and stores data in object called newItem
  function handleChange(e) {
    e.persist();
    newItem.product[e.target.name] = e.target.value;
    setNewItem(newItem);
  }

  //Stores new item in Wishlist API
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("https://ironrest.herokuapp.com/wishlist", newItem);
  }

  //Display on screen
  return (
    <div className="newItem-mainContainer">
      <div className="navbar">
        <Navbar />
        <h2>Enter information about your product below!</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="newItem-nameContainer">
          <label>Product Name:</label> <br />
          <input type="text" name="name" onChange={handleChange}></input> <br />
        </div>

        <div className="newItem-priceContainer">
          <label>Price:</label> <br />
          <input type="text" name="price" onChange={handleChange} />
          <br />
        </div>

        <button className="newItem-button" type="submit" value="Submit">
          Add New
        </button>
      </form>
    </div>
  );
}

export default NewItem;
