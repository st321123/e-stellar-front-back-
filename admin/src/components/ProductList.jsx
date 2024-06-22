import React, { useEffect, useState } from "react";
import "./productList.css";
import axios from "axios";
const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/allproduct")
      .then((success) => {
        setData(success.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const removeProduct = async (id) => {
    await axios
      .delete("http://localhost:9000/removeproduct/" + id)
      .then((success) => {
        console.log(success);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="productList">
      <div className="listHeading">
        <h1>Product List</h1>
      </div>
      <div className="table">
        <table>
          <thead className="tableHd">
            <tr>
              <th className="product">Products</th>
              <th className="title">Title</th>
              <th className="oldPrice">Old Price</th>
              <th className="newPrice">New Price</th>
              <th className="category">Category</th>
              <th className="remove">Remove</th>
            </tr>
          </thead>
          {data.map((productData) => (
            <tbody>
              <tr className="tableBody">
                <td className="product">
                  <img src={productData.image} alt="" />
                </td>
                <td className="title">{productData.name}</td>
                <td className="oldPrice">${productData.old_price}</td>
                <td className="newPrice">${productData.new_price}</td>
                <td className="category">{productData.category}</td>
                <td className="remove">
                  <i
                    onClick={() => removeProduct(productData._id)}
                    class="fa-solid fa-trash-can"
                  ></i>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ProductList;
