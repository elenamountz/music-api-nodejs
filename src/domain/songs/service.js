const songRepository = require('../../data/repositories/songs');

const songService = {
  async findAll() {
    return songRepository.findAll();
  },
  async findOne(id) {
    return songRepository.findOne(id);
  },
  async delete(id) {
    return songRepository.delete(id);
  },
  async upload(req) {
    const songToSave = {
      title: req.body.title,
      artist: req.body.artist,
      album: req.body.album,
      coverUrl: req.body.coverUrl,
      track: req.file.buffer
    }
    return songRepository.create(songToSave);
  }
}

module.exports = songService;