// dependencies
const express = require('express');

// create the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// set up the Express app to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up the Express app to serve static files
app.use(express.static('public'));

// data
const allNotes = require('./db/db.json');

// API routes
app.get('/api/notes', (req, res) => {
  return res.json(allNotes);
});

app.post('/api/notes', (req, res) + {
  
})

// start the server
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});