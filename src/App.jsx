import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";

const App = () => {
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    async function findThePicture() {
      const response = await axios.get("https://api.unsplash.com/");
      console.log(response);
      setPicture(response);
    }

    findThePicture();
  }, []);

  return (
    <div>
      App
      <SearchBar />
    </div>
  );
};

export default App;
