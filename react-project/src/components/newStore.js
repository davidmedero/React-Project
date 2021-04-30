import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function NewStore(props) {
  let [newProduct, setNewProduct] = useState({ product: {} });
  let [products, setProducts] = useState([]);
  let [inputText, setInputText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]); // Filters products based on seach input

  useEffect(() => {
    axios.get(`https://ironrest.herokuapp.com/accessoriesStore`).then((res) => {
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
    e.target.reset();
    axios.post("https://ironrest.herokuapp.com/accessoriesStore", newProduct);
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
          <button className="toyCar-button" onClick={() => removeProduct(item)}>
            Remove
          </button>
        </div>
      );
    });
  };

  //Reloads the page
  function refreshPage() {
    axios.get(`https://ironrest.herokuapp.com/ShoeStore`).then((res) => {
      setProducts(res.data);
    });
  }

  //Removes single product from Store
  let removeProduct = (item) => {
    axios
      .delete(`https://ironrest.herokuapp.com/accessoriesStore/${item._id}`)
      .then(() => refreshPage());
  };

  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  };

  function onLoad() {
    if (window.localStorage) {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;
        window.location.reload();
      } else localStorage.removeItem("firstLoad");
    }
  }

  //Display on screen
  return (
    <div className="fakeStore-mainContainer">
      <div className="newProduct-mainContainer">
        <div className="navbar">
          <Navbar />
          <h2>Push Product to NEW STORE</h2>
        </div>

        <form name="contact-form" onSubmit={handleSubmit}>
          <div className="neItemt-nameContainer">
            <label>Product Name:</label> <br />
            <input type="text" name="name" onChange={handleChange}></input>{" "}
            <br />
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

          <button
            onClick={refreshPage()}
            className="newItem-button"
            type="submit"
            value="Submit"
          >
            Add New
          </button>
        </form>
        <br /><br />
      </div>

      <div className="addToStoreDiv">{displayAllProducts()}</div>
    </div>
  );
}

export default NewStore;
