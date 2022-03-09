// Here I am bringing the npm packages I need for this file.
const router = require('express').Router();
const path = require('path');

// This route will bring the home page of my app by sending the index.html to the client as respond.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// This route will bring the notes page of my app by sending the notes.html to the client as respond.
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// This route will bring the home page of my app by sending the index.html to the client as respond if they request anything besides notes.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;