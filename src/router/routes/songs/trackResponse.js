class TrackResponse {
  constructor(song = {}) {
    this.id = song.id;
    this.track = song.track;
  }
}

module.exports = TrackResponse;