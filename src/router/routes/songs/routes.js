const express = require('express');
const multer  = require('multer');
const songService = require('../../../domain/songs/service');
const SongInfoResponse = require('./songInfoResponse');
const { songValidatorRules, validate } = require('../../middlewares/songRequestValidator');

const router = express.Router();
const storage = multer.memoryStorage()
const upload = multer({ storage });


// List songs
router.get('/', async (_req, res) => {
  try {
    const songs = await songService.findAll();
    const response = songs.map(song => new SongInfoResponse(song));
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get song info
router.get('/:id/info', async (req, res) => {
  try {
    const songId = req.params.id;
    const song = await songService.findOne(songId);
    res.send(new SongInfoResponse(song));
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get song track
router.get('/:id/track', async (req, res) => {
  try {
    const songId = req.params.id;
    const track = await songService.findTrack(songId);
    res.send(track);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete song
router.delete('/:id', async (req, res) => {
  try {
    const songId = req.params.id;
    await songService.delete(songId);
    res.send();
  } catch (err) {
    res.status(400).send(err);
  }
});

// Upload new song
router.post('/upload', 
  upload.single('audio_file'), songValidatorRules.upload, validate,
  async (req, res) => {
    // try {
      const uploadedSong = await songService.upload(req);
      res.status(201).send(new SongInfoResponse(uploadedSong));
    // } catch (err) {
    //   res.status(400).send(err);
    // }
});

module.exports = router;