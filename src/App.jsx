import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {

  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
