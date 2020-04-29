import React from "react";

import { NavLink } from "react-router-dom";

import "../css/common.css";
const Header = () => {
  return (
    <div className="header">
      <div className="appTitle">Service Channel - Project</div>
      <div className="navBar">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/view">
          Posts
        </NavLink>

        <NavLink exact to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
