
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

const port = 3000



app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {

    res.sendFile('index.html',{ root: __dirname });

});
app.post('/User-Name-Data', function (req, res) {

    var name =  req.body.firstName + ' ' + req.body.lastName ; 

    res.send(name + ' Submitted Successfully!');

});

var server = app.listen(port, function () {

    console.log('Node server is running on port' +' ' + port);

});


