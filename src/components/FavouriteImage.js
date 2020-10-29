import React from "react";
// import IconButton from "./IconButton";
import "./FavouriteImage.css";

export default function FavouriteImage({ photoId }) {
  return (
    <img
      src={`https://source.unsplash.com/${photoId}`}
      alt="Favorite with photoId"
    />
  );
}
