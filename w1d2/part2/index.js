require("dotenv").config();
const express = require('express')
const path = require("path");
const app = express()

app.get("/", function(req,res){
    console.log("GET /")
    res.status(200).sendFile(path.join(__dirname, "index.html"))
})



const server = app.listen(3434, function(){
    console.log("server is runing on 3434 from EXPRESS")
})
