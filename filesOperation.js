
const fs = require('fs');

console.log("Started reading the file.");
const buffer = fs.readFileSync("data.txt", {encoding: 'utf8'});

console.log(buffer);

fs.writeFileSync("order.txt", "i: 1, type: image, quantiiy: 2")
fs.appendFileSync("order.txt", 'i: 2, type: choclate, quantiiy: 7')
console.log("Ended reading the file.");