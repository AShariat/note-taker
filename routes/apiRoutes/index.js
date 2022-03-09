const router = require('express').Router();

const createNewNote = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');

const randomId = require('../../lib/randomId.js');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(notes);
});

router.post('/notes', (req, res) => {
  req.body.id = randomId;

  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;