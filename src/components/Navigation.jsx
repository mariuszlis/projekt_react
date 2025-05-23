import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink
        to="/hot"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Hot
      </NavLink>
      <NavLink
        to="/regular"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Regular
      </NavLink>
      <NavLink
        to="/add"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Add Meme
      </NavLink>
    </nav>
  );
};

export default Navigation;
