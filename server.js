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

// start the server
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});