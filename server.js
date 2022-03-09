// Here I am bringing the npm packages I need for this file.
const express = require('express');

// Here I am bringing two index.js files that I will be using for my routes. By puting my routes inside another files my server.js stays more organized.
const htmlRoutes = require('./routes/htmlRoutes/index.js');
const apiRoutes = require('./routes/apiRoutes/index.js');

// Using this method to set the port will allow my app to run in different environments like Heroku.
const PORT = process.env.PORT || 3001;

// Here I am starting my server.
const app = express();

// Here I have my middleware functions I will be using for this app.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Here I am making my server to listen.
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});