import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

import { Photo } from "../photoTypes";

interface ImageGalleryProps {
  photos: Photo[];
  onClick: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, onClick }) => {
  return (
    <ul className={css.listCard}>
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <ImageCard
              photo={photo}
              urls={photo.urls}
              alt_description={photo.alt_description}
              onClick={onClick}
            ></ImageCard>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
