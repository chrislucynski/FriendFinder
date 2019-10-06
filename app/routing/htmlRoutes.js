var express = require('express');
var path = require('path');
var app = express()

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
    });
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
    })
    app.get("/assets/style.css", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "assets", "style.css"));
    });
    app.get("/assets/images/sparkle_heart.jpg", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "assets", "images", "sparkle_heart_jpg"));
    });
}