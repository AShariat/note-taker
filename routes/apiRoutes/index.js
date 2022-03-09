const router = require('express').Router();

const { createNewNote, deleteNote } = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  req.body.id = require('really-unique-id')();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  const { id } = req.body;
  const deleted = notes.find(note => note.id === id);
  let note;
  if (deleted) {
    note = deleteNote(id, notes);
  } else {
    res.status(404).json({ message: "Note you are looking for does not exist!"});
  }
  res.json(note);
});

module.exports = router;