import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="images/logo.jpg" alt="logo" />
        <h1>E-Stellar</h1>
      </div>
      <h2>ADMIN PANEL</h2>
      <img src="images/profile.jpg" alt="profile" className="profileImg" />
    </div>
  );
};

export default Navbar;
