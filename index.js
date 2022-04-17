const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})
const port = process.env.PORT || 3000
app.listen(port, function(req,res){
    console.log("Running");
})