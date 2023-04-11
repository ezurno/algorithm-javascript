const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);
let soliders = input[1].split(" ").map(Number);

soliders.reverse(); // 순서를 뒤집어 LIS(최장 증가 부분수열) 문제로 변환
let array = [0];

function lowerBound(array, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (target <= array[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

for (let solider of soliders) {
  if (array[array.length - 1] < solider) {
    array.push(solider);
  } else {
    let index = lowerBound(array, solider, 0, array.length);
    array[index] = solider;
  }
}

let counter = N - (array.length - 1);
console.log(counter);
