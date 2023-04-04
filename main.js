const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let array = [];
let cycle = Number(input[0]);

for (let i = 1; i <= cycle; i++) {
  array.push(Number(input[i]));
}

// console.log(array);

array.sort((a, b) => {
  return a - b;
});

let log = "";

for (let i = 0; i < array.length; i++) {
  log += `${array[i]} \n`;
}

console.log(log);
