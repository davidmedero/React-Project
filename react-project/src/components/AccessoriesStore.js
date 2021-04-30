import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Content, Heading } from "./Styles";
import { Fragment } from "react";
import ScrollButton from "./ScrollButton";

function AccessoriesStore(props) {
    const [products, setProducts] = useState([]); //Holds all products from API
    const [search, setSearch] = useState(""); // Search Bar state
    const [filteredProducts, setFilteredProducts] = useState([]); // Filters products based on seach input

    // Imports API from online
    useEffect(() => {
        axios
            .get(
                `https://ironrest.herokuapp.com/accessoriesStore`
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

    //Sort product list by A to Z
    function sortByAtoZ() {
        setProducts(
            [...products].sort((a, b) => {
                if (a.product.name < b.product.name) {
                    return -1;
                }
                if (a.product.name > b.product.name) {
                    return 1;
                }
                return 0;
            })
        );
    }

    //Sort product list by Z to A
    function sortByZtoA() {
        setProducts(
            [...products].sort((a, b) => {
                if (a.product.name > b.product.name) {
                    return -1;
                }
                if (a.product.name < b.product.name) {
                    return 1;
                }
                return 0;
            })
        );
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

    //Sort products by Search Input
    useEffect(() => {
        setFilteredProducts(
            products.filter((item) => {
                return item.product.name.toLowerCase().includes(search.toLowerCase());
            })
        );
    }, [search, products]);


    //Display on screen
    return (
        <div className="fakeStore-mainContainer">

            <div>
                <Navbar />
                <h2>Accessoriess</h2>
            </div>
            <div className="header-div">
                <img src="https://identity-mag.com/wp-content/uploads/2017/10/category_makeup_840x400-9wmww.jpg" />
            </div>


            <div className="sortBy">
                <div>
                    <h3>Sort By:</h3>
                </div>
                <div>

                    <div className="wishlist-buttons-container">
                        <button className="wishlist-buttons" onClick={sortByHigh}>
                            Highest Price
                        </button>
                        <button className="wishlist-buttons" onClick={sortByLow}>
                            Lowest Price
                        </button>
                        <button className="wishlist-buttons" onClick={sortByAtoZ}>
                            A to Z
                        </button>
                        <button className="wishlist-buttons" onClick={sortByZtoA}>
                            Z to A
                        </button>
                    </div>

                    <div className="seachBar-div">
                        <input
                            className="seachBar"
                            type="text"
                            placeholder="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

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

            {filteredProducts.map((item, i) => {
                return (
                    <div className="makeupItemContainer">
                        <img src={item.product.image} className="makeupImages" />
                        <div className="makeupName">{item.product.name}</div>
                        <div className="makeupPrice">${item.product.price}</div>
                        <button
                            className="toyCar-button"
                            onClick={() => addToWishlist(item.product)}
                        >
                            Add to Wishlist
          </button>
                    </div>
                );
            })}

        </div>
    );
}

export default AccessoriesStore;