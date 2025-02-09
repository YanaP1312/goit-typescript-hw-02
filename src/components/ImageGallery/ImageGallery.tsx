import { useImageContext } from "../../context/imageContext";
import { Image } from "../../interfaces/interface";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery: React.FC = () => {
  const { images, openModal } = useImageContext();
  return (
    <ul>
      {images.map((image: Image, index: number) => (
        <li key={image.id} onClick={() => openModal(index)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
