import ImageCard from "../imageCard/ImageCard";
import s from "./imageGallery.module.css";

const ImageGallery = ({ picture }) => {
  return (
    <ul className={s.list}>
      {picture.map(({ id, urls, slug }) => (
        <li key={id}>
          <ImageCard
            urls={urls}
            slug={slug}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
