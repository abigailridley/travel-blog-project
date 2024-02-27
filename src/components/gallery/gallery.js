import React, { useState } from 'react';
import './gallery.css'

const Gallery = ({ images }) => {
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
                <img className='gallery-image' src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
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


// import React, { useState } from 'react';

// const Gallery = () => {
//   // Define an array of image objects with src and alt attributes
//   const images = [
//     { src: require('./img/seattle/img1.jpg'), alt: 'Image 1' },
//     { src: require('./img/seattle/img2.jpg'), alt: 'Image 2' },
//     { src: require('./img/seattle/img3.jpg'), alt: 'Image 3' },
//     { src: require('./img/seattle/img4.jpg'), alt: 'Image 4' },
//     { src: require('./img/seattle/img5.jpg'), alt: 'Image 5' },
//     { src: require('./img/seattle/img6.jpg'), alt: 'Image 6' },
//     { src: require('./img/seattle/img7.jpg'), alt: 'Image 7' },
//     { src: require('./img/seattle/img8.jpg'), alt: 'Image 8' },
//     { src: require('./img/seattle/img9.jpg'), alt: 'Image 9' },
//     { src: require('./img/seattle/img10.jpg'), alt: 'Image 10' },
//     { src: require('./img/seattle/img11.jpg'), alt: 'Image 11' },
//     { src: require('./img/seattle/img12.jpg'), alt: 'Image 12' },
//     { src: require('./img/seattle/img13.jpg'), alt: 'Image 13' },
//     { src: require('./img/seattle/img14.jpg'), alt: 'Image 14' },
//     { src: require('./img/seattle/img15.jpg'), alt: 'Image 15' }
//     // Add more image objects as needed
//   ];

//   // State to track the index of the currently displayed image
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to handle clicking on the next button
//   const nextImage = () => {
//     setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
//   };

//   // Function to handle clicking on the previous button
//   const prevImage = () => {
//     setCurrentImageIndex(prevIndex =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="gallery">
//       <div className="image-container">
//         {/* Display the current image */}
//         <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
//       </div>
//       <div className="controls">
//         {/* Button to show the previous image */}
//         <button onClick={prevImage}>Previous</button>
//         {/* Button to show the next image */}
//         <button onClick={nextImage}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;