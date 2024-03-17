// example 1 -
// const lib = require("./lib");
// const fs = require("fs");

// synchronous
// let txt = fs.readFileSync("demo.txt","utf-8"); // synchronous 
// console.log("Content :",txt);


// asynchronous
// fs.readFile("demo.txt","utf-8",(err,txt)=>{
//     console.log("Content :",txt);
// })

// console.log("Sum :", lib.sum(5, 6));
// console.log("Diff :", lib.diff(12, 6));

// ########################################################################################################
// example 2 -
const express = require("express");
const PORT = 8080;
const server = express();

console.log("Hello World!");

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})