import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Book from "./Pages/Book";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:category" element={<Book />} />
    </Routes>
  );
}

export default App;
