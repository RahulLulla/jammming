import Track from "../Track/Track";
import "./SearchResults.css";

function SearchResults({ spotifySearchResults, addToCustomPlaylist }) {
  return (
    <div className="search-results">
      <h1>Results</h1>
      <div className="tracklist">
        {spotifySearchResults.map((track) => (
          <Track
            trackItem={track}
            handleOnClick={addToCustomPlaylist}
            sign={"+"}
            key={track.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
