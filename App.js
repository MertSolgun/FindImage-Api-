import searchImages from "./api";
import "./App.css";
import SearchHeader from "./SearchHeader";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}></SearchHeader>
      <ImageList imagesPlaceholder={images}></ImageList>
    </div>
  );
}

export default App;
