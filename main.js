const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let number = Number(input[0].split(" ")[0]);
let log = "";

let array = input[1].split(" ").map((x) => Number(x));

let max = array.reduce((st, nd) => Math.max(st, nd));
let min = array.reduce((st, nd) => Math.min(st, nd));

console.log(`${min} ${max}`);
