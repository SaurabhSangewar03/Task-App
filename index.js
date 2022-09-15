const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080

const db = require('./database/mongoose');

// log request
app.use(morgan('tiny'));

// parse request to body parser
app.use(bodyParser.urlencoded({extented:true}));

// set view engine
app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname, 'views'))

// load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));


// Use router.js Here
app.use('/', require('./routes/router'));

app.listen(PORT, () =>{console.log(`Server is running on http://localhost:${PORT}`)});