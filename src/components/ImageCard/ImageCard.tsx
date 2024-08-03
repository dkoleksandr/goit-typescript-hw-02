import css from "./ImageCard.module.css";
import { Photo } from "../photoTypes";

interface Urls {
  small: string;
}

interface ImageCardProps {
  photo: Photo;
  urls: Urls;
  alt_description: string;
  onClick: (photo: Photo) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  photo,
  urls,
  alt_description,
  onClick,
}) => {
  return (
    <div>
      <img
        className={css.image}
        src={urls.small}
        alt={alt_description}
        onClick={() => {
          onClick(photo);
        }}
      />
    </div>
  );
};

export default ImageCard;
