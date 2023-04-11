const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [have, need] = input[0].split(" ").map(Number);
let array = [];

for (let i = 1; i <= have; i++) {
  array.push(Number(input[i]));
}

let start = 1;
let end = array.reduce((a, b) => Math.max(a, b));

let count = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let cable = new Array();

  for (line of array) {
    cable.push(parseInt(line / mid));
  }

  let sum = cable.reduce((a, b) => a + b);

  if (sum < need) {
    end = mid - 1;
  } else {
    start = mid + 1;
    count = mid;
  }
}

console.log(count);
