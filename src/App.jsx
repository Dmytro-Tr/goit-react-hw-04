import React, { useEffect, useState } from "react";
import { fetchArticles } from "./api";
import ImageGallery from "./components/imageGallery/ImageGallery";
import SearchBar from "./components/searchBar/SearchBar";
import Loader from "./components/loader/Loader";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";

// const YOUR_ACCESS_KEY = "XZStRBfACQP-q-kCXR0IJai0mE6pvomLOZZrclZrEPM";

const App = () => {
  const [picture, setPicture] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const findThePicture = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchArticles(query, page);
        setPicture((prev) => [...prev, ...data]);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findThePicture();
  }, [query, page]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      toast.error("Enter text to search for images!");
      return;
    }
    setQuery(newQuery);
    setPicture([]);
    setPage(1);
  };

  return (
    <div>
      <SearchBar onHandleChangeQuery={handleChangeQuery} />
      {picture.length > 0 && <ImageGallery picture={picture} />}
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
      <LoadMoreBtn onHandleChangePage={handleChangePage} />
    </div>
  );
};

export default App;
