const fs = require('fs');

function apiRoutes(app) {

  const allNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  
  app.get('/api/notes', (req, res) => {
    return res.json(allNotes);
  });
  
  app.post('/api/notes', (req, res) + {
    
  })
}

module.exports = apiRoutes;