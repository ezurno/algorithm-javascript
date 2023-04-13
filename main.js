const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let array = [];
let checked = new Array(N).fill(false);
let selected = [];

for (let i = 1; i <= N; i++) {
  array.push(i);
}

let log = "";

function dfs(array, depth, start) {
  if (depth == M) {
    let result = [];
    for (let i of selected) result.push(i);
    for (let x of result) log += `${x} `;
    log += "\n";
  }

  for (let i = start; i < N; i++) {
    if (checked[i]) continue;
    selected.push(array[i]);
    checked[i] = true;
    dfs(array, depth + 1, i + 1);
    selected.pop();
    checked[i] = false;
  }
}

dfs(array, 0, 0);
console.log(log);
