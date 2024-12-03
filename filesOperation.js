//Blocking code fs
const fs = require('fs');

console.log("Started reading the file.");
const buffer = fs.readFileSync("data.txt", {encoding: 'utf8'});

console.log(buffer);
// To create and add data in order.txt
fs.writeFileSync("order.txt", "i: 1, type: image, quantiiy: 2")
//To append data in order.txt
fs.appendFileSync("order.txt", 'i: 2, type: choclate, quantiiy: 7')
console.log("Ended reading the file.");