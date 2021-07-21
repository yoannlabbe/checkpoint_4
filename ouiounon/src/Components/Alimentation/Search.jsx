import React, { useState } from "react";

const Search = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClick = () => {
    onSubmit(keyword);
  };

  return (
    <div>
      <input type="text" value={keyword} onChange={handleKeywordChange} />
      <button onClick={handleClick}>Chercher</button>
    </div>
  );
};

export default Search;
