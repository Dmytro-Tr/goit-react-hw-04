import { useState } from "react";
import s from "./searchBar.module.css";

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
          <svg className={s.svg}>
            <use href="../../svg/symbols.svg#icon-search"></use>
            {/* <use href="/src/svg/symbols.svg#icon-search"></use> */}
          </svg>
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
