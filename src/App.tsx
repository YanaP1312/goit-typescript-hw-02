import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import { ImageProvider } from "./context/imageContext";

function App() {
  return (
    <div>
      <ImageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </ImageProvider>
    </div>
  );
}

export default App;
