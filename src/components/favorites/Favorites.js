import React from "react";
import FavoritesList from "./FavoritesList";

const Favorites = () => {
  return (
    <div className="container text-center">
      <h2>Favorites</h2>
      <p>Listed LIFO (Last In First Out)</p>
      <FavoritesList />
    </div>
  );
};

export default Favorites;
