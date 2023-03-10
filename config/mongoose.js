const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
mongoose.connect('mongodb://localhost/Naukripro');

const db = mongoose.connection;

db.on('err',console.error.bind(console, "error connection to DB"));

db.once('open',function(){
    console.log("connected to DB MONGO DB of Naukri")
})

module.exports = db;