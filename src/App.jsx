import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";        // respeta mayúsculas/minúsculas
import Offerings from "./pages/Offerings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/offerings" element={<Offerings />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}



