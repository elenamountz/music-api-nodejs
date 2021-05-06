class DomainSong {
  constructor({ id, title, artist, album, coverUrl, track } = {}) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.coverUrl = coverUrl;
    this.track = track;
  }
}

module.exports = DomainSong;