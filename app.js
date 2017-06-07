const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


mongoose.Promise = global.Promise;
mongoose.connect(config.database);
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});


const app = express();
const port = 3777;
const students = require('./routes/students');
const Events = require('./routes/Events');
const Category = require('./routes/CategoryMstr');

//MIDDLEWARE


app.use(cors());//run on diff port
app.use(bodyParser.json());//grab data from frontend
app.use(passport.initialize());
app.use(passport.session());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//ROUTING
require('./config/passport')(passport);
app.use('/students', students);
app.use('/Events', Events);
app.use('/Categorys',Category);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

//every route goes to index  except declared
app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, 'angular-cli/src/index.html'));
   res.sendFile(path.join(__dirname, 'public/index.html')); 
});


// Start Server
app.listen(port, ()=> {
	console.log('Server started on port '+port);
});