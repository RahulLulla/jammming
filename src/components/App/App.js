import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";
import Spotify from "../../utils/spotify";

function App({ token }) {
  const [spotifySearchResults, setSpotifySearchResults] = useState([]);
  const [customPlaylist, setCustomPlaylist] = useState([]);

  const handleSearch = async (spotifySearchInput) => {
    const searchedData = await Spotify.search(spotifySearchInput, token);
    setSpotifySearchResults(searchedData);
  };

  const addToCustomPlaylist = (newTrack) => {
    let foundTrack = spotifySearchResults.find(
      (track) => JSON.stringify(track) === JSON.stringify(newTrack)
    );

    if (foundTrack) {
      setCustomPlaylist((prevTracks) => {
        let exists = customPlaylist.find(
          (track) => JSON.stringify(track) === JSON.stringify(newTrack)
        );
        return exists ? prevTracks : [...prevTracks, foundTrack];
      });
    }
  };

  const removeFromCustomPlaylist = (newTrack) => {
    setCustomPlaylist((prevTracks) =>
      prevTracks.filter(
        (track) => JSON.stringify(track) !== JSON.stringify(newTrack)
      )
    );
  };

  const createCustomPlaylist = async (playlistName) => {
    await Spotify.createCustomPlaylist(
      playlistName,
      customPlaylist.map((track) => track.id),
      token
    );
    setCustomPlaylist([]);
  };

  return (
    <div className="app">
      <div className="app-title">
        <h1>
          Ja<span className="highlight">mm</span>ing
        </h1>
      </div>
      <div className="app-search">
        <SearchBar handleSearch={handleSearch} />
      </div>

      <div className="app-playlists">
        <SearchResults
          spotifySearchResults={spotifySearchResults}
          addToCustomPlaylist={addToCustomPlaylist}
        />

        <Playlist
          customPlaylist={customPlaylist}
          removeFromCustomPlaylist={removeFromCustomPlaylist}
          createCustomPlaylist={createCustomPlaylist}
        />
      </div>
    </div>
  );
}

export default App;
