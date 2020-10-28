import React from "react";
import IconButton from "./IconButton";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  function favouriteClick() {
    const oldFavourites = JSON.parse(localStorage.getItem("favourites"));
    const newFavourites = [...oldFavourites, ""];
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  }
  return (
    <div className="imageContainer">
      <IconButton onClick={() => favouriteClick()}>❤</IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
