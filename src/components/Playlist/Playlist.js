import { useState } from "react";
import Track from "../Track/Track";
import "./Playlist.css";
function Playlist({
  customPlaylist,
  removeFromCustomPlaylist,
  createCustomPlaylist,
}) {
  const [playlistName, setPlaylistName] = useState("");
  const handlePlaylistNameChange = ({ target }) => {
    setPlaylistName(target.value);
  };

  return (
    <div className="playlist">
      <input
        type="text"
        id="playlist-title"
        name="playlist-title"
        value={playlistName}
        onChange={handlePlaylistNameChange}
      />
      {customPlaylist.map((track) => (
        <Track
          trackItem={track}
          handleOnClick={removeFromCustomPlaylist}
          sign={"-"}
          key={track.id}
        />
      ))}

      <div className="playlist-button">
        <button
          className="save-playlist-button"
          onClick={() => createCustomPlaylist(playlistName)}
        >
          SAVE TO SPOTIFY
        </button>
      </div>
    </div>
  );
}
export default Playlist;
