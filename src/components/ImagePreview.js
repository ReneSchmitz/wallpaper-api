import React from "react";
import IconButton from "./IconButton";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <div className="imageContainer">
      <IconButton
        className="icon-button"
        onClick={() => {
          let favourites = null;
          try {
            favourites = JSON.parse(localStorage.getItem("favourites")) || [];
          } catch (error) {
            console.error(error);
            favourites = [];
          }
          if (favourites.includes(id)) {
            // Allready added to favourites
            return;
          }
          const newFavourites = [...favourites, id];
          localStorage.setItem("favourites", JSON.stringify(newFavourites));
        }}
      >
        ❤
      </IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
