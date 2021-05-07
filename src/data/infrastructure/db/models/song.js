const { Sequelize, DataTypes } = require('sequelize');
const db = require('..');

const Song = db.define('songs', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false
  },
  album: {
    type: Sequelize.STRING
  },
  coverUrl: {
    type: Sequelize.TEXT
  },
  track: {
    type: Sequelize.BLOB('long'),
    allowNull: false
  }
}, {
  
});

module.exports = Song;