const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [cycle, findIndex] = input[0].split(" ").map(Number);

// console.log(cycle);
// console.log(findIndex);

let array = input[1].split(" ").map(Number);

array.sort((a, b) => {
  return a - b;
});

console.log(array[findIndex - 1]);
