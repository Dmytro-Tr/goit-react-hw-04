import { useState } from "react";

const SearchBar = ({ onHandleChangeQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onHandleChangeQuery(value);
    // console.log(value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(evt) => setValue(evt.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button
          onClick={handleSubmit}
          type="submit"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
