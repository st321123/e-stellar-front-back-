import React from "react";
import "./admin.css";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

const Admin = () => {
  return (
    <div className="adminContainer">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
