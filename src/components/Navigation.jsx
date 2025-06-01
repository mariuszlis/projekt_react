import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/hot">Hot</NavLink>
      <NavLink to="/regular">Regular</NavLink>
      <NavLink to="/add">Add Meme</NavLink>
    </nav>
  );
};

export default Navigation;
