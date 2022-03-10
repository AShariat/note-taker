// Here I am bringing the npm packages I need for this file.
const router = require('express').Router();

// Here I am bringing the functions and database I need for this file.
const { createNewNote, validateNote, deleteNote } = require('../../lib/notes.js');
let { notes } = require('../../db/db.json');

// This route will bring all the notes by sending the db.json's contents to the user as respond.
router.get('/notes', (req, res) => {
  res.status(200).json(notes);
});

// This route will let the user to post new notes to the server and after they get assigned random ids they need to get validated to make sure they contain Title and Text then they will go through another function to be generated as new notes and also get added to our server's database.
router.post('/notes', (req, res) => {
  req.body.id = require('really-unique-id')();
  if (!validateNote(req.body)) {
    res.status(400).send('Your note is not properly formatted!');
  } else {
  const result = createNewNote(req.body, notes);
  res.status(200).json(result);
  }
});

// This route will let the user to delete any note from the server by clicking on the delete icon.
router.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const results = deleteNote(id, notes);
  res.status(200).json(results);
});

module.exports = router;