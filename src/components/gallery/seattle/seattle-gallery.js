const Gallery = ({images}) => {
    return (
        <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${index + 1}`} />
        ))}
      </div>
    );
}

export default Gallery;