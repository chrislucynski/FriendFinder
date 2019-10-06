var express = require('express');
var path = require('path');
var friends = require('../data/friends')
var app = express()

app.get("/api/friends", function(req, res) {
    res.send("Welcome to the lone-star app!");
});

function compareScores(user){
    var totalDifference = 50;
    var closestFit;
    for(var i = 0; i < friends.length; i++){
        var scoreDifferenceArray = [];
        for(var j = 0; j < friends[i].score.length; j++){
            scoreDifferenceArray.push(Math.abs(friends[i].score[j] - user.score[j]))
        }
        var differenceNum = scoreDifferenceArray.reduce(function (total, number){
            return total + number
        })
        console.log('Name: ' +friends[i].name + ', Difference in scores: ' + differenceNum)
        if(differenceNum < totalDifference){
            totalDifference = differenceNum
            closestFit = friends[i]
        }
    }
    console.log('Closest match: ' + closestFit.name)
    console.log(closestFit)
    return closestFit
}

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.send("Welcome to being lonely!");
    });
    app.post("/api/friends", function(req, res) {
        var newUser = req.body
        var match = compareScores(newUser);
        res.send(match);
    });
}
