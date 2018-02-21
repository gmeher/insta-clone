var express = require('express');
var path = require('path');
var open = require('open');
var port = 3000;

var app = express();
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../src/index.html'));
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
})

console.log("listening to port 3000");