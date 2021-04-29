import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Games(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
        .get("https://www.cheapshark.com/api/1.0/deals")
        .then((res) => {
        setProducts(res.data);
        });
    }, []);

    let displayAllProducts = () => {
        return products.map((product) => {
            return (
                <div className="gamesContainer">
                    <img src={product.thumb} className="gamesImages"/> <br></br>
                    <div className="gamesTitle"><b>{product.title}</b></div>
                    <div className="gamesPrice">${product.salePrice}</div><br></br>
                    <button onClick={()=> addToWishlist(product)}>Add to Wishlist</button>
                </div>

            )
        })
    }

    function addToWishlist(item) {
        let product = {
          name: item.title,
          price: item.salePrice,
          image: item.thumb,
        };
        axios.post(`https://ironrest.herokuapp.com/wishlist`, {
          product: product,
        });
    }

    function sortByHigh() {
        setProducts(
          [...products].sort((a, b) => {
            return Number(b.salePrice) - Number(a.salePrice);
          })
        );
    }

    function sortByLow() {
        setProducts(
          [...products].sort((a, b) => {
            return Number(a.salePrice) - Number(b.salePrice);
          })
        );
    }


    return (
        <div className="fakeStore-mainContainer">
        <div className="navbar">
        <Navbar/>
        <h2>Games</h2>
        </div>

        <div className="fakeStore-button-div"></div>
        <div>
            <h3>Sort By:</h3>
        </div>
        <div>
          <button className="fakeStore-button" onClick={() => sortByHigh()}>Highest Price</button>
          <button className="fakeStore-button" onClick={() => sortByLow()}>Lowest Price</button>
        </div>
       
        
        <div>{displayAllProducts()}</div>
            
        </div>
    );
}

export default Games;