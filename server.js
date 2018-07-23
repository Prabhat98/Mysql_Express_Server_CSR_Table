const express = require("express");
const server = express();

server.listen(7787,()=>
{
    console.log("Server started at http://localhost:7787/")
})