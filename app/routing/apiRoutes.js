var express = require('express');
var path = require('path');
var friends = require('../data/friends')
var app = express()

// A GET route with the url /api/friends. 
// This will be used to display a JSON of all possible friends.

app.get("/api/friends", function(req, res) {
    res.send("Welcome to the lone-star app!");
  });


// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
function compareScores(user){
    var totalDifference = 50;
    var closestFit;
    for(var i = 0; i < friends.length; i++){
        var scoreDifferenceArray = [];
        for(var j = 0; j < friends[i].score.length; j++){
            // console.log(friends[i].score[j] - user.score[j])
            scoreDifferenceArray.push(Math.abs(friends[i].score[j] - user.score[j]))
        }
        // console.log('Name: ' +friends[i].name + ', Difference in scores: ' + scoreDifferenceArray)
        var differenceNum = scoreDifferenceArray.reduce(function (total, number){
            return total + number
        })
        console.log(differenceNum)
        if(differenceNum < totalDifference){
            totalDifference = differenceNum
            closestFit = friends[i]
        }
    }
    console.log(closestFit)
    return closestFit
}

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.send("Welcome to being lonely!");
    });
    app.post("/api/friends", function(req, res) {
        // console.log(friends);
        var newUser = req.body
        // console.log(newUser)
        var match = compareScores(newUser);
        res.send(match);
    });
}
