class DomainSong {
  constructor({ id, title, artist, album, coverUrl } = {}) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.coverUrl = coverUrl;
  }
}

module.exports = DomainSong;