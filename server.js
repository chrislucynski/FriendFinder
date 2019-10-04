var express = require('express');
var path = require('path');

var app = express()
var PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)
// app.use(apiRoutes);
// app.use(htmlRoutes);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });