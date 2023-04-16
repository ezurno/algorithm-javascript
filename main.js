const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);
let array = [];

for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  array.push([x, y]);
}

// console.log(array);

let visited = new Array(N).fill(false);
let result = [];
let answer = 1e9;

function dfs(depth, start) {
  if (1 <= depth) {
    let totalX = 1;
    let totalY = 0;

    for (let i of result) {
      let [x, y] = array[i];
      totalX *= x;
      totalY += y;
    }

    answer = Math.min(answer, Math.abs(totalX - totalY));
  }

  for (let i = start; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i);
    dfs(depth + 1, i + 1);
    visited[i] = false;
    result.pop();
  }
}

dfs(0, 0);
console.log(answer);
