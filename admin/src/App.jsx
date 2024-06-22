import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <Admin />
  
    </div>
  );
}

export default App;
