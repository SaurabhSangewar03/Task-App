const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/taskApp_database');

//acquire the connection 
const db = mongoose.connection;

//error
db.on('Error',console.error.bind(console, 'Error connecting to db'));

//up and running then print the message
db.once('open', function(){
    console.log('Sucessfully connected to the database');
});

module.exports = db;