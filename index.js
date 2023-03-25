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
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-stratergy');

var bodyParser = require('body-parser');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressLayouts);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name:'Naukri',
    secret:"abc",
    saveUninitialized : false,
    resave : false,
    cookie :{
        maxAge:(1000*60*100)
         
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// use express router
app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(err,"There is some error in listen");
        return;
    }
    console.log('server is running on port',port);
})