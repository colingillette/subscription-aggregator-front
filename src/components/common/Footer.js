import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-4 bg-dark text-white rounded fixed-bottom">
      <nav className="d-flex justify-content-evenly">
        <Link to="favorites">Favorites</Link>
        {" | "}
        <Link to="/">Queue</Link>
        {" | "}
        <Link to="search">Search</Link>
      </nav>
    </div>
  );
};

export default Footer;
