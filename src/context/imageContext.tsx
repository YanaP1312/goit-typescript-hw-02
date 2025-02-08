import {
  useContext,
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { getImages } from "../images-api";
import { useNavigate } from "react-router-dom";
import { DataList, Image, ImageContextType } from "../interfaces/interface";

export const imageContext = createContext<ImageContextType | null>(null);

export const useImageContext = (): ImageContextType => {
  const context = useContext(imageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};

export const ImageProvider = ({ children }: PropsWithChildren) => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
    navigate("/gallery");
  };

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      try {
        setError(false);
        setLoading(true);
        setNoResults(false);
        const data: DataList = await getImages(searchQuery, page);
        if (data.results.length === 0) {
          setNoResults(true);
          return;
        }

        setImages((prev) => [...prev, ...data.results]);

        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Image, index: number) => {
    setModalIsOpen(true);

    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <imageContext.Provider
      value={{
        images,
        loading,
        error,
        page,
        totalPages,
        noResults,
        modalIsOpen,
        selectedImage,
        currentIndex,
        searchQuery,
        handleSearch,
        loadMore,
        openModal,
        closeModal,
        setCurrentIndex,
      }}
    >
      {children}
    </imageContext.Provider>
  );
};
