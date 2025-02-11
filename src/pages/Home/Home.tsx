import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useImageContext } from "../../context/imageContext";
import s from "./Home.module.css";
import Iridescence from "../../components/Backgrounds/Iridescence/Iridescence";

const Home = () => {
  const { loading } = useImageContext();
  return (
    <div className={s.wrapper}>
      <Iridescence
        // color={[0.5, 0.2, 0.9]}
        color={[0.6, 0.5, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
      <main className={s.container}>
        <div className={s.loaderWrap}>{loading && <Loader />}</div>
        <h1 className={s.title}>
          FIND <span className={s.span}>inspiration</span>. EXPLORE{" "}
          <span className={s.span}>beauty</span>. SHARE{" "}
          <span className={s.span}>moments</span>.
        </h1>
        <div className={s.wrap}>
          <SearchBar />
        </div>
      </main>
    </div>
  );
};

export default Home;
