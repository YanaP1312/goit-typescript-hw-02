import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import s from "./BackToTopBtn.module.css";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={s.container}>
      <button
        className={`${s.btn} ${isVisible ? s.visible : ""}`}
        arial-label="Back to top"
        onClick={scrollToTop}
      >
        <IoIosArrowUp size={25} />
      </button>
    </div>
  );
};

export default BackToTopBtn;
