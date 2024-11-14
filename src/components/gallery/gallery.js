import React, { useCallback, useEffect, useState } from "react";
import "./gallery.css";

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsEnlarged(false);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsEnlarged(false);
  }, [images.length]);

  const toggleEnlargement = () => {
    setIsEnlarged(!isEnlarged);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex, nextImage, prevImage]);

  return (
    <div className="gallery">
      <div className="image-container">
        <div className="image-panel-left">
          <button className="control-button" onClick={prevImage}>
            &lt;
          </button>
        </div>
        <div
          className="image"
          onClick={toggleEnlargement}
          style={{ cursor: "pointer" }}
        >
          <img
            className={isEnlarged ? "gallery-image enlarged" : "gallery-image"}
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
          />
          <div className="image-number">
            {currentImageIndex + 1}/{images.length}
          </div>
        </div>
        <div className="image-panel-right">
          <button className="control-button" onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
