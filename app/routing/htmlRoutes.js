var express = require('express');
var path = require('path');

var app = express()

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
    });
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
    })
}