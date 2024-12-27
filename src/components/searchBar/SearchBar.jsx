const SearchBar = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    // const topic = form.elements.topic.value;
    // onSearch(topic);
    form.reset();
    console.log(form);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
