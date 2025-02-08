import { useImageContext } from "../../context/imageContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../../components/ImageModal/ImageModal";
import Loader from "../../components/Loader/Loader";

const Gallery = () => {
  const { images, loading, error, page, totalPages, noResults, selectedImage } =
    useImageContext();
  return (
    <div>
      <Link to="/">Let's go searching</Link>
      {noResults && toast("No photos found matching your request")}

      {images.length > 0 && <ImageGallery />}
      {loading && <Loader />}
      {error && toast.error("Something went wrong, try again!")}
      {images.length > 0 && page < totalPages && <LoadMoreBtn />}
      {selectedImage && <ImageModal />}
    </div>
  );
};

export default Gallery;
