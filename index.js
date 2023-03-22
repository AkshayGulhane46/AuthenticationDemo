// Constants 
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
app.use(express.static('./assets'));
const cookieParser = require('cookie-parser');
const sassMiddleware  = require('node-sass-middleware') ; 


var bodyParser = require('body-parser');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressLayouts);


// use express router
app.use('/', require('./routes'));


// app.use(sassMiddleware({ // all the flags under this are from documentation 

//     src: './assets/scss',
//     dest: './assets/css',
//     debug : true, // this is added because our code is in staging, when added in prod this flag should be false
//     outputStyle: 'extended',
//     prefix:'/css'

// }));


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port,function(err){
    if(err){
        console.log(err,"There is some error in listen");
        return;
    }
    console.log('server is running on port',port);
})