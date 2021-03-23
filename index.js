//pulling express package
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could NOT connect to database: ', err)
    } else {
        //console.log(config.secret);
        console.log('Connected to database: ', config.db)
    }
});

app.use(express.static(__dirname + '/client-angular/dist/client-angular'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client-angular/dist/client-angular/index.html'));
    console.log('aaa')
});



app.listen(8080, () => {
    console.log('Listening on port 8080');
});


//nodemon gobal utility that allows us to not have to refresh the server
// npm install -g (install globally) nodemon

//# napravi novu granu na gitu git checkout -b %ime_grane%
// 1. instaliraj express
// 2. instaliraj mongoose
// 3. napravi config
// 4. mongose.connect(config.uri) - uri je konekcioni string prema bazi
