const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let array = input[0].toString().split(" ").map(String);

let newArray_1 = "";
let newArray_2 = "";

let first = array[0];
let second = array[1];

for (let i = 0; i < first.length; i++) {
  newArray_1 += first.split("").reverse()[i];
}

for (let i = 0; i < second.length; i++) {
  newArray_2 += second.split("").reverse()[i];
}

console.log(Math.max(Number(newArray_1), Number(newArray_2)));
