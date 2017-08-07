const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// set up express app
const app = express();


app.use('/lib',express.static(path.join(__dirname,'bower_components')));
//set up static files
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));
// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//home
const router = require('./src/routers/api');
app.get('/', router.home);

//notFound
// app.get('*',router.notFound);
// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
