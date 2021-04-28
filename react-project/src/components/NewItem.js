import React from 'react';
import Navbar from './Navbar';
// import axios from 'axios';
// import { useState } from 'react';

function NewItem(props) {

    // const [newItem, setNewItem] = useState({})

    // function handleChange(e) {
    //     e.persist()
    //     newItem[e.target.name] = e.target.value
    //     setNewItem(newItem)
    // }

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     axios.post("https://ironrest.herokuapp.com/wishlist3", newItem)
    // }

    return (
        <div>
        <Navbar/>
          
        </div>
    );
}

export default NewItem;

  /* <form onSubmit={handleSubmit}>
                <label>Product Name:</label>
                <input type="text" name="name" onChange={handleChange}></input>
                <label>Price:</label>
                <input type="text" name="type" onChange={handleChange}></input>
                <label>Description:</label>
                <input type="text" name="description" onChange={handleChange}></input>
                <button type="submit" value="Submit">Add New</button>
            </form> */