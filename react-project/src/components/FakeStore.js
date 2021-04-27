import React, { useState, useEffect } from "react";
import axios from "axios";

function FakeStore(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  let allProducts = () => {
    return products.map((product, i) => {
      return <div key={i}>{product.price}</div>;
    });
  };

  return (
    <div>
      <div>Fakestore products go here</div>
      <div>{allProducts()}</div>
    </div>
  );
}

export default FakeStore;
