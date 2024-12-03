
const fs = require('fs');

console.log("Started reading the file.");
const buffer = fs.readFileSync("data.txt");

console.log(buffer.toString());
console.log("Ended reading the file.");

