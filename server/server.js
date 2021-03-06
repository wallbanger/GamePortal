var express = require('express');
var http = require('http');
var path = require('path');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use(cors());

app.set('port', 8081);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

var users = __dirname + '/' + 'users.json';

function getUserScheme(req) {
    var username;

    if (req.body.username) {
        username = req.body.username;
    }

    return {
        username: username
    }
}

// Middleware

app.get('/users_list/', function (req, res) {
    fs.readFile(users, 'utf8', function (err, data) {
        res.end(data);
    });
});

app.delete('/delete_user/:number', function (req, res) {
    fs.readFile(users, 'utf8', function (err, data) {
        data = JSON.parse(data);
        data.splice(parseInt(req.params.number) - 1, 1);

        fs.writeFile(users, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            res.end(JSON.stringify(data));
        });
    });
});

app.post('/add_user/', function (req, res) {
    fs.readFile(users, 'utf8', function (err, data) {
        if (err) return console.log(err, 'add user error');
        var userScheme = getUserScheme(req);
        var createdUsers = JSON.parse(data).concat(userScheme);

        fs.writeFile(users, JSON.stringify(createdUsers), function (err) {
            if (err) return console.log(err, 'add user error fs');
            res.end(JSON.stringify(createdUsers));
        });
    });
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
