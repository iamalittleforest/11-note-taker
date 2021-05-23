// dependencies
const express = require('express');
const path = require('path');

// create the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// set up the Express app to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// data

// routes

// start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));