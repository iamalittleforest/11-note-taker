// dependencies
const path = require('path');

// export html routes
module.exports = (app) => {
  
  // return notes.html file 
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // return index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}
