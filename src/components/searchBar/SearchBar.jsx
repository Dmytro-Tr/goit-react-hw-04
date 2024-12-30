import { useState } from "react";
import s from "./searchBar.module.css";
import { Search } from "lucide-react";

const SearchBar = ({ onHandleChangeQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onHandleChangeQuery(value);
    // console.log(value);
  };

  return (
    <header className={s.header}>
      <form
        onSubmit={handleSubmit}
        className={s.form}
      >
        <input
          onChange={(evt) => setValue(evt.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className={s.button}
        >
          <Search className={s.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

// #icon-search
