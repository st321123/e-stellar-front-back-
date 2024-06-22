import React, { useContext } from "react";
import "./cartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeToCart } =
    useContext(ShopContext);

  const handleRemoveFromCart = (productId) => {
    removeToCart(productId);
  };

  return (
    <section className="cartItemsContainer">
      <table>
        <thead>
          <tr className="cartItemTitles">
            <th className="product">Products</th>
            <th className="title">Title</th>
            <th className="price">Price</th>
            <th className="qty">Quantity</th>
            <th className="total"> Total</th>
            <th className="remove">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <tr className="cartItemsDetails" key={product.id}>
                  <td className="product">
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td className="title">
                    <span>{product.name}</span>
                  </td>
                  <td className="price">
                    <span>${product.new_price}</span>
                  </td>
                  <td className="qty">
                    <span>{cartItems[product.id]}</span>
                  </td>
                  <td className="total">
                    <span>${product.new_price * cartItems[product.id]}</span>
                  </td>
                  <td className="remove">
                    <button onClick={() => handleRemoveFromCart(product.id)}>
                      <i className="fa-solid fa-trash-can"></i> Remove
                    </button>
                  </td>
                </tr>
              );
            }
            return null; // Added to handle the if condition without else clause
          })}
        </tbody>
      </table>
      <div className="cartSummaryContainer">
        <h4>Summary</h4>
        <div className="summaryTable">
          <p>Subtotal:</p>
          <span>${getTotalCartAmount()}</span>
        </div>
        <div className="summaryTable">
          <p>Shipping Fee:</p>
          <span>Free</span>
        </div>
        <div className="summaryTable">
          <p>Total:</p>
          <span>${getTotalCartAmount()}</span>
        </div>
        <button className="checkout">Checkout</button>
        <p>
          <b>Your Coupon Code Enter Here:</b>
        </p>
        <input type="text" placeholder="Coupon code" />
        <button className="cartSubmit">Submit</button>
      </div>
    </section>
  );
};

export default CartItems;
