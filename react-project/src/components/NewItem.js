import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useState } from 'react';

function NewItem(props) {
    // Declare object "newItem" with an object "product" inside.
    // Inside object "product" theres a default image url stored
    const [newItem, setNewItem] = useState({ product: { image: "https://cdn.pixabay.com/photo/2017/10/18/14/31/box-2864335_960_720.png" } })

    //Takes user input and stores data in object called newItem
    function handleChange(e) {
        e.persist()
        newItem.product[e.target.name] = e.target.value
        setNewItem(newItem)
    }

    //Stores new item in Wishlist API
    function handleSubmit(e) {
        e.preventDefault()
        axios.post("https://ironrest.herokuapp.com/wishlist", newItem)
    }


    //Display on screen
    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Product Name:</label>
                    <input type="text" name="name" onChange={handleChange}></input>
                </div>

                <div>
                    <label>Price:</label>
                    <input type="text" name="price" onChange={handleChange}></input ><br />
                </div>

                <button type="submit" value="Submit">Add New</button>

            </form>

        </div>
    );
}

export default NewItem;

