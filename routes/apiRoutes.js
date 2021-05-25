// dependencies
const fs = require('fs');

// export api routes
module.exports = function(app) {

  // reads db.json and parses into JSON
  const allNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  
  app.get('/api/notes', (req, res) => {
    return res.json(allNotes);
  });
  
  app.post('/api/notes', (req, res) + {
    
  })
}