// Here I am bringing the npm packages I need for this file.
const router = require('express').Router();

// Here I am bringing the functions and database I need for this file.
const { createNewNote, validateNote } = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');

// This route will bring all the notes by sending the db.json's contents to the client as respond.
router.get('/notes', (req, res) => {
  res.json(notes);
});

// This route will let the client to post new notes to the server and after they get assigned random ids they need to get validated to make sure they contain Title and Text then they will go through another function to be generated as new notes and also get added to our server's database.
router.post('/notes', (req, res) => {
  req.body.id = require('really-unique-id')();
  if (!validateNote(req.body)) {
    res.status(400).send('Your note is not properly formatted!');
  } else {
  const note = createNewNote(req.body, notes);
  res.json(note);
  }
});

module.exports = router;