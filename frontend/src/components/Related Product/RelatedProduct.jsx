import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";

const RelatedProduct = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/popularproducts")
      .then((response) => {
        setPopularProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching popular products:", error);
        // Handle error state or show a message to the user
      });
  }, []);

  return (
    <div className="popularContainer">
      <div className="popularContent">
        <h1>Related Products</h1>
        <div className="productsContainer">
          {popularProducts.map((product) => (
            <Item
              key={product.id} // Ensure each Item has a unique key prop
              id={product.id}
              name={product.name}
              image={product.image}
              old_price={product.old_price}
              new_price={product.new_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
