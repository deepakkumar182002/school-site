/* eslint-disable react-refresh/only-export-components */
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    setTimeout(() => setLoading(false), 1500); // Simulate loading delay
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  ) : (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Main />);
