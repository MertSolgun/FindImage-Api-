import axios from "axios";

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

export default searchImages;
