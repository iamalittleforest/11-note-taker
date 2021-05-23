// dependencies
const express = require('express');
const path = require('path');

// create the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// set up the Express app to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up the Express app to serve static files
app.use(express.static('public'));

// data

// routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));