import React from "react";
import FavouriteImage from "./FavouriteImage";

// import IconButton from "./IconButton";
// import "./FavouriteImageList.css";

export default function FavoriteImageList({ photoIds }) {
  return (
    <div>
      {photoIds.map((photoId) => (
        <FavouriteImage key={photoId} photoId={photoId} />
      ))}
    </div>
  );
}

// Alternativ
// export default function FavouriteImageList({ photoIds }) {
//   //   const photoIds = props.photoIds;
//   const photoItems = photoIds.map((photoId) => (
//     <FavouriteImage key={photoId} photoId={photoId} />
//   ));
//   return <div>{photoItems}</div>;
// }
