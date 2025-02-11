import { useImageContext } from "../../context/imageContext";
import { Link } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import BackToTopBtn from "../../components/BackToTopBtn/BackToTopBtn";
import Loader from "../../components/Loader/Loader";
import ImageModal from "../../components/ImageModal/ImageModal";
import s from "./Gallery.module.css";
import { LuSearch } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const { images, loading, page, totalPages, modalIsOpen, loadMore } =
    useImageContext();
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [masonryHeight, setMasonryHeight] = useState(0);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const lastLoadedPage = useRef<number>(page);

  useEffect(() => {
    if (!galleryRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setMasonryHeight(galleryRef.current?.clientHeight || 0);
    });
    resizeObserver.observe(galleryRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (loading || page >= totalPages) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && page < totalPages) {
          lastLoadedPage.current = page + 1;
          loadMore();
        }
      },
      { threshold: 0.1 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => observer.disconnect();
  }, [loading, page, totalPages, loadMore, masonryHeight]);

  return (
    <main className={s.container}>
      <div className={s.wrap}>
        <Link className={s.link} to="/">
          Let's go searching &nbsp;
          <LuSearch />
        </Link>
      </div>
      {images.length > 0 && <ImageGallery />}
      {loading && <Loader />}

      <div ref={observerRef} className={s.observer} />

      {modalIsOpen && <ImageModal />}
      <BackToTopBtn />
    </main>
  );
};

export default Gallery;
