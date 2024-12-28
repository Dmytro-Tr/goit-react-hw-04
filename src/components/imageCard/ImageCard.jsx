const ImageCard = ({ urls, slug }) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={slug}
      />
    </div>
  );
};

export default ImageCard;
