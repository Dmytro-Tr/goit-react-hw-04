const ImageCard = ({ small, alt_description, onImageClick }) => {
  return (
    <div>
      <img
        src={small}
        alt={alt_description}
        onClick={onImageClick}
      />
    </div>
  );
};

export default ImageCard;
