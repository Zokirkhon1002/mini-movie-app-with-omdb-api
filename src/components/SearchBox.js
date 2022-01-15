import React from "react";

const SearchBox = ({search, setSearch}) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
