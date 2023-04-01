const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cycle = Number(input[0]);
let number = input[1].toString().split("").map(Number);

console.log(number.reduce((st, nd) => st + nd));
