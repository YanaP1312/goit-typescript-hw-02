import { useImageContext } from "../../context/imageContext";
import { Link } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader";
import ImageModal from "../../components/ImageModal/ImageModal";

const Gallery = () => {
  const { images, loading, page, totalPages, modalIsOpen } = useImageContext();
  return (
    <div>
      <Link to="/">Let's go searching</Link>
      {images.length > 0 && <ImageGallery />}

      {images.length > 0 && page < totalPages && <LoadMoreBtn />}
      {loading && <Loader />}
      {modalIsOpen && <ImageModal />}
    </div>
  );
};

export default Gallery;
