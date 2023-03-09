const express = require('express')
const path = require('path')
const app = express();
const cookieParser = require('cookie-parser');
const port = 8080;



app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressLayouts);


app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port,function(err){
    if(err){
        console.log(err,"There is some error in listen");
        return;
    }
    console.log('server is running on port',port);
})