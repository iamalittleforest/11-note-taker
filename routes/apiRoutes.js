// dependencies
const fs = require('fs');
const uuid = require('uuid').v4;

// export api routes
module.exports = (app) => {

  // reads db.json and parses into JSON
  let allNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  // return notes as JSON
  app.get('/api/notes', (req, res) => {
    return res.json(allNotes);
  });
  
  // receive new note to save on the request body
  app.post('/api/notes', (req, res) => {
    
    // create newNote and add unique id
    const newNote = {...req.body, id: uuid()};

    // add newNote to allNotes
    allNotes.push(newNote);

    // update db.json with updated allNotes
    fs.writeFileSync('./db/db.json', JSON.stringify(allNotes));

    // sends allNotes as a JSON response
    res.json(allNotes);
  });

  // receive query parameter containing id of note to delete
  app.delete('/api/notes/:id', (req, res) => {

    // retrieve id of note
    const noteId = parseInt(req.params.id);
    
    // remove note with given id
    allNotes.filter(note => {
      parseInt(note.id) !== noteId;
    });

    // update db.json with updated allNotes
    fs.writeFileSync('./db/db.json', JSON.stringify(allNotes));

    // sends allNotes as a JSON response
    res.json(allNotes);
  });
}