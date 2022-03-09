// Here I am bringing the npm packages I need for this file.
const fs = require("fs");
const path = require("path");

// This function first stores the body of client's request then it adds that body to our notes array then re-writes our database with that new note added to it.
function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
};

// This function is here to make sure both Title and Text exist before it creates the note. The front-end does not actually give the user option to save before both Title and Text are entered but I added this function here just to make sure when I am adding note using Insomnia I still follow the same rule.
function validateNote(note) {
  if (!note.title || !note.text) {
    return false;
  }
  return true;
};

module.exports = {
  createNewNote,
  validateNote
};