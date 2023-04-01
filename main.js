const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

data = input[0].trim().split(" ");

console.log(data == "" ? 0 : data.length);
