class Spotify {
  static async search(searchTerm, token) {
    const url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=10`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const jsonResponse = await response.json();
    if (jsonResponse.tracks.items) {
      return jsonResponse.tracks.items.map((track) => {
        return {
          id: track.id,
          songName: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
        };
      });
    }
  }

  static async createCustomPlaylist(name, trackIds, token) {
    if (Array.isArray(trackIds) && trackIds.length) {
      const url = `https://api.spotify.com/v1/me/playlists`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          public: true,
        }),
      });
      const jsonResponse = await response.json();
      const playlistId = jsonResponse.id;
      if (playlistId) {
        const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
        await fetch(url, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uris: trackIds.map((id) => `spotify:track:${id}`),
          }),
        });
      }
    }
  }
}
export default Spotify;
