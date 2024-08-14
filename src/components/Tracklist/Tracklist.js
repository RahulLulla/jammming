import Track from "../Track/Track";

function Tracklist({ spotifySearchResults, addToCustomPlaylist }) {
  return (
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
  );
}

export default Tracklist;
