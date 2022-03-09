const router = require('express').Router();

const createNewNote = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(notes);
});

router.post('/notes', (req, res) => {
  req.body.id = require('really-unique-id')();

  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;