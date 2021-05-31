// dependencies
const fs = require('fs');
const uuid = require('uuid').v4;

// export api routes
module.exports = (app) => {

  // reads db.json and parses into JSON
  let allNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  // GET - return notes as JSON
  app.get('/api/notes', (req, res) => {
    return res.json(allNotes);
  });
  
  // POST - receive new note to save on the request body
  app.post('/api/notes', (req, res) => {
    
    // create newNote and add unique id
    const newNote = {...req.body, id: uuid()};
    // console.log(newNote.id);

    // add newNote to allNotes
    allNotes.push(newNote);

    // update db.json with updated allNotes
    fs.writeFile('./db/db.json', JSON.stringify(allNotes), (err) => {
      if (err) throw err;
    });

    // sends allNotes as a JSON response
    res.json(allNotes);
  });

  // DELETE - receive query parameter containing id of note to delete
  app.delete('/api/notes/:id', (req, res) => {

    // retrieve id of note
    const noteId = req.params.id;
    // console.log(noteId);
    
    // remove note with given id
    for(let i = 0; i < allNotes.length; i++) {
      if(allNotes[i].id === noteId) {
        allNotes.splice(i, 1);
      }
    }

    // update db.json with updated allNotes
    fs.writeFile('./db/db.json', JSON.stringify(allNotes), (err) => {
      if (err) throw err;
    });

    // sends allNotes as a JSON response
    res.json(allNotes);
    // console.log(allNotes);
  });
}