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
    const newNote = {...req.body, id: uuid()};

    console.log(newNote);
    res.json(newNote);
  })
}