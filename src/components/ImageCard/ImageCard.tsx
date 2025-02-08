import { Image } from "../../interfaces/interface";

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.description || "Image"} />
    </div>
  );
};

export default ImageCard;
