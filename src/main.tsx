import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { ImageProvider } from "./context/imageContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ImageProvider> */}
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
    {/* </ImageProvider> */}
  </StrictMode>
);
