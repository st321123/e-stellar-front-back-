import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./productDisplay.css";
import product_rt_1 from "../../../public/data/product_rt_1.png";
import product_rt_2 from "../../../public/data/product_rt_2.png";
import product_rt_3 from "../../../public/data/product_rt_3.png";
import product_rt_4 from "../../../public/data/product_rt_4.png";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productDisplayContainer">
      <div className="productRtImg">
        <img src={product_rt_1} alt="Product Image 1" />
        <img src={product_rt_2} alt="Product Image 2" />
        <img src={product_rt_3} alt="Product Image 3" />
        <img src={product_rt_4} alt="Product Image 4" />
      </div>
      <div className="productImg">
        <img src={product.image} alt="Product Main Image" />
      </div>
      <div className="productDetails">
        <h2>{product.name}</h2>
        <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span>(122)</span>
        </div>
        <div>
          <div className="productPrice">
            <p>${product.old_price}</p>{" "}
            <span className="new_price">${product.new_price}</span>
          </div>
        </div>
        <span>Select Size:</span>
        <div className="productBtns">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>
        <button
          onClick={() => addToCart(product.id)}
          className="addToCart"
        >
          ADD TO CART
        </button>
        <button className="buyItNow">BUY IT NOW</button>
        <p>
          Category: <span>{product.category} | T-Shirt | Crop Top</span>
        </p>
        <p>
          Tags: <span>Modern | Latest </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
