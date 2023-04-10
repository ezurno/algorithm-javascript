const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let trees = input[1].split(" ").map(Number);

let start = 0;
let end = trees.reduce((a, b) => Math.max(a, b));

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let tree of trees) {
    if (mid < tree) {
      // 톱보다 나무가 클때
      total += tree - mid; // 잘린 값을 추가
    }
  }

  if (total < M) {
    // 깎을 나무가 모자랄 때
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
