import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function ShoeStore(props) {
    const [products, setProducts] = useState([]); //Holds all products from API

    // Imports API from online
    useEffect(() => {
        axios
            .get(
                `https://ironrest.herokuapp.com/ShoeStore`
            )
            .then((res) => {
                setProducts(res.data);
            });
    }, []);

    //Displays all products when function is called
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
                        onClick={() => addToWishlist(item.product)}
                    >
                        Add to Wishlist
          </button>
                </div>
            );
        });
    };

    // Post product to Wishlist API
    function addToWishlist(item) {
        let product = {
            name: item.name,
            price: item.price,
            image: item.image,
        };
        console.log(product);
        axios.post(`https://ironrest.herokuapp.com/wishlist`, {
            product: product,
        });
    }

    //Sort product list by Highest price
    function sortByHigh() {
        setProducts(
            [...products].sort((a, b) => {
                return Number(b.product.price) - Number(a.product.price);
            })
        );
    }

    //Sort product list by Lowest price
    function sortByLow() {
        setProducts(
            [...products].sort((a, b) => {
                return Number(a.product.price) - Number(b.product.price);
            })
        );
    }

    //Display on screen
    return (
        <div className="fakeStore-mainContainer">
            <div className="navbar">
                <Navbar />
                <h2>Makeup Products</h2>
            </div>

            <div className="fakeStore-button-div">
                <div>
                    <h3>Sort By:</h3>
                </div>
                <div>
                    <button onClick={() => sortByHigh()}>Highest Price</button>
                    <button onClick={() => sortByLow()}>Lowest Price</button>
                </div>
            </div>
            <div>{displayAllProducts()}</div>
        </div>
    );
}

export default ShoeStore;