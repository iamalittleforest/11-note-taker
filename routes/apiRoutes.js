// dependencies
const fs = require('fs');

// export api routes
module.exports = (app) => {

  // reads db.json and parses into JSON
  const allNotes = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));

  // return notes as JSON
  app.get('/api/notes', (req, res) => {
    return res.json(allNotes);
  });
  
  // app.post('/api/notes', (req, res) + {
    
  // })
}