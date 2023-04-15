const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let array = [];

for (let i = 1; i <= N; i++) {
  array.push(i);
}

// let visited = new Array(N).fill(false);
let selected = [];

let log = "";
function dfs(array, depth, start) {
  if (M == depth) {
    let result = [];
    for (let i of selected) result.push(array[i]);
    for (let x of result) log += `${x} `;
    log += "\n";
    return;
  }

  for (let i = start; i < array.length; i++) {
    selected.push(i);
    dfs(array, depth + 1, i);
    selected.pop();
  }
}
dfs(array, 0, 0);
console.log(log);
