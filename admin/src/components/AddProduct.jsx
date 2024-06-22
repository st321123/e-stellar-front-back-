import React, { useEffect, useState } from "react";
import axios from "axios";
import "./addProduct.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState();
  const [old_price, setOld_price] = useState();
  const [new_price, setNew_price] = useState();
  const [category, setCategory] = useState();
  const [imageurl, setImageurl] = useState(false);
  let responseData;
  const [imageURL, setImageURL] = useState();

  const navigate = useNavigate();

  const imageHandler = (e) => {
    setImageurl(e.target.files[0]);
  };
  const formData = new FormData();
  formData.append("product", imageurl);
  axios
    .post("http://localhost:9000/upload", formData)
    .then((res) => setImageURL(res.data.image_url))
    .catch((error) => console.log(error));
  const addProduct = (e) => {
    e.preventDefault();
    let image = imageURL;

    axios
      .post("http://localhost:9000/addproduct", {
        name,
        old_price,
        new_price,
        category,
        image,
      })
      .then((result) => {
        console.log(result);
        navigate("/productlist");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addProduct">
      <label htmlFor="">Product title:</label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Type here..."
      />
      <label htmlFor="">Price:</label>
      <input
        onChange={(e) => setOld_price(e.target.value)}
        type="text"
        placeholder="Type here..."
      />
      <label htmlFor="">Offer Price:</label>
      <input
        onChange={(e) => setNew_price(e.target.value)}
        type="text"
        placeholder="Type here..."
      />
      <div className="productCategory">
        <label htmlFor="">Product Category:</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value=""></option>
          <option value="men">Mens</option>
          <option value="women">Womens</option>
          <option value="kid">Kids</option>
        </select>
      </div>
      <div className="productUpload">
        <img
          src={imageurl ? URL.createObjectURL(imageurl) : "images/upload.jpg"}
        />
        <input type="file" onChange={imageHandler} />
      </div>

      <button onClick={addProduct}> + Add Product</button>
    </div>
  );
};

export default AddProduct;
