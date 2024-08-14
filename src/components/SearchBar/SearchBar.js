import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ handleSearch }) {
  const [spotifySearchInput, setSpotifySearchInput] = useState('');

  const handleSpotifySearchInput = ({ target }) => {
    setSpotifySearchInput(target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-item">
        <input
          type="text"
          id="search-box"
          name="search-box"
          className="search-box"
          placeholder="Enter A Song Title"
          value={spotifySearchInput}
          onChange={handleSpotifySearchInput}
        />
      </div>
      <div className="search-bar-item">
        <button
          className="search-button"
          onClick={() => handleSearch(spotifySearchInput)}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
