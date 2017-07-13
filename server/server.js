var express = require('express');
var http = require('http');
var path = require('path');
var cors = require('cors');
var fs = require('fs');

var app = express();

app.use(cors());

var dataJson = __dirname + '/' + 'data.json';

app.set('port', 8081);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

// Middleware

app.get('/usersList', function (req, res) {
    fs.readFile( dataJson, 'utf8', function (err, data) {
        res.end( data );
    });
});

app.delete('/deleteUser/:number', function (req, res) {
    fs.readFile( dataJson, 'utf8', function (err, data) {
        data = JSON.parse( data );
        data.splice(parseInt(req.params.number) - 1, 1);
        fs.writeFile(dataJson, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            res.end( JSON.stringify(data));
        });
    });
});

app.use(function(req, res, next) {
    if (req.url == '/') {
        res.end("Hello");
    } else {
        next();
    }
});

app.use(function(req, res, next) {
    if (req.url == '/forbidden') {
        next(new Error('wops, denied'));
    } else {
        next();
    }
});

app.use(function(req, res, next) {
    if (req.url == '/test') {
        res.end('Test');
    } else {
        next();
    }
});

app.use(function(req, res) {
    res.send(404, 'Page Not Found Sorry');
});

app.use(function(err, req, res, next) {
    // NODE_ENV = 'production'
    if (app.get('env') == 'development') {
        var errorHandler = express.errorHandler();
        errorHandler(err, req, res, next);
    } else {
        res.send(500);
    }
});