const DomainSong = require('../../../domain/songs/domainSong');
const Song = require('../../infrastructure/db/models/song');

const songRepository = {
  async findAll() {
    const dbSongs = await Song.findAll();
    return dbSongs.map(song => new DomainSong(song));
  },
  async findOne(id) {
    const dbSong = await Song.findByPk(id);
    return new DomainSong(dbSong);
  },
  async create(newSong) {
    const dbSong = await Song.create(newSong);
    return new DomainSong(dbSong);
  },
  async delete(id) {
    await Song.destroy({
      where: {
        id
      }
    });
  }
}

module.exports = songRepository;
