import { Image } from "../../interfaces/interface";
import { AiFillHeart } from "react-icons/ai";

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.description || "Image"} />
      <p>
        <AiFillHeart />
        &nbsp;
        {image.likes}
      </p>
    </div>
  );
};

export default ImageCard;
