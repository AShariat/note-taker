const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;

  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
};

function deleteNote(id, notesArray) {
  const note = notesArray.find(note => note.id === id);;

  notesArray = notesArray.filter(note => note.id !== id);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
};

module.exports = { createNewNote, deleteNote };