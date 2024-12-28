import "./Track.css";
function Track({ trackItem, handleOnClick, sign }) {
  const { songName, artist, album } = trackItem;
  return (
    <>
      <div className="track">
        <div className="track-info">
          <h2 className="songname">{songName}</h2>
          <p className="artist-album">
            {artist} | {album}
          </p>
        </div>
        <div className="track-action">
          <button className="action" onClick={() => handleOnClick(trackItem)}>
            {sign}
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Track;
