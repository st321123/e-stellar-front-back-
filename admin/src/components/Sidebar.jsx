import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside>
      <Link to="/addproduct">
        <button>
          <img src="images/trolly.png" /> Add Product
        </button>
      </Link>
   <Link to="/productlist">
   <button>
        <img src="images/list.png" /> Product List
      </button>
   </Link>
    </aside>
  );
};

export default Sidebar;
