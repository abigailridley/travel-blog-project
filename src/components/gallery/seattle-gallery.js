import React, { useState } from 'react';

const Gallery = () => {
  // Define an array of image URLs
  const images = [
  '/img/seattle/img1.jpeg'
  ];

  // State to track the index of the currently displayed image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle clicking on the next button
  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  // Function to handle clicking on the previous button
  const prevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery">
      <div className="image-container">
        {/* Display the current image */}
        <img src={images[currentImageIndex]} alt={`${currentImageIndex + 1}`} />
      </div>
      <div className="controls">
        {/* Button to show the previous image */}
        <button onClick={prevImage}>Previous</button>
        {/* Button to show the next image */}
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Gallery;
