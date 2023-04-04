const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let array = input[0].split(" ").map(Number);

array.sort((a, b) => {
  return a - b;
});

let log = "";

for (let i = 0; i < array.length; i++) {
  log += `${array[i]} `;
}

console.log(log);
