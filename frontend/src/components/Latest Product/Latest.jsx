import React, { useState, useEffect } from "react";
import axios from "axios";
import "./latest.css";
import Item from "../Item/Item";

function Latest() {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/latestproducts")
      .then((response) => {
        setLatestProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching latest products:", error);
        // Handle error state or show a message to the user
      });
  }, []);

  return (
    <section className="popularContainer">
      <div className="popularContent">
        <h1>Latest Products</h1>
        <div className="latestProductsContainer">
          {latestProducts.map((product) => (
            <Item
              key={product.id} // Unique key prop for each product
              id={product.id}
              name={product.name}
              image={product.image}
              old_price={product.old_price}
              new_price={product.new_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Latest;
