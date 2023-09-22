import "./App.css";
import SearchHeader from "./SearcHeader";
import axios from "axios";
import { useState } from "react";
import ImageList from "./ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    console.log(term);
    const result = await searchImages(term);
    setImages(result);
  };

  //istek atma
  const searchImages = async (term) => {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos/?client_id=aaj6YPiMnAhQba_1qtN0W-0vIg9jlgl0HZ6c43mW1ZM",
      {
        params: {
          query: term,
        },
      }
    );
    debugger;
    return response.data.results;
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit}></SearchHeader>
      <ImageList imagesPlaceHolder={images}></ImageList>
    </div>
  );
}

export default App;
