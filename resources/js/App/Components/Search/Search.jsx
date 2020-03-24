import React from "react";

export default function Search({
  handleTextInputChange,
  searchValue,
  setTracks
}) {
  const searchUrl = "http://www.aims.test:8080/api/search";

  const handleSearchClick = async () => {
    try {
      const response = await fetch(`${searchUrl}?song=${searchValue}`);
      const data = await response.json();
      setTracks(data);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        onChange={handleTextInputChange}
        value={searchValue}
        placeholder="search for track title"
      />
      <input
        onClick={handleSearchClick}
        type="submit"
        value="search"
        className="input"
      />
    </div>
  );
}
