import "./App.css";
import { useState } from "react";
import ImagePreview from "./components/ImagePreview";
import FavouriteImage from "./components/FavouriteImage";
import { getRandomImage } from "./api/getRandomImage";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }
  return (
    <main>
      <button onClick={() => handleClick()}>Get Random Image</button>
      {randomImage && (
        <ImagePreview
          id={randomImage.id}
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
        />
      )}
      <FavouriteImage photoId="UjD08DRW24E" />
    </main>
  );
}

export default App;
