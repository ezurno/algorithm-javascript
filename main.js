const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);
let M = Number(input[2]);

let array_N = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let array_M = input[3].split(" ").map(Number);

// console.log(array_N);

function lowerBound(array, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (array[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

function upperBound(array, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (array[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function calculate(array, left, right) {
  let rightIndex = upperBound(array, right, 0, array.length);
  let leftIndex = lowerBound(array, left, 0, array.length);

  // console.log(`right: ${rightIndex}, left: ${leftIndex}`);

  return rightIndex - leftIndex;
}

let log = "";
for (let i = 0; i < array_M.length; i++) {
  let tmp = calculate(array_N, array_M[i], array_M[i]);
  log += `${tmp} `;
}

console.log(log);
