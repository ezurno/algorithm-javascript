const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let line = input[i].split(" ").map(Number);

  if (line[0] == 0) break;
  else {
    let N = line[0];
    let array = line.slice(1);
    visited = new Array(N).fill(false);
    selected = [];
    answer = "";

    dfs(array, 0, 0);
    console.log(answer);
  }
}

function dfs(array, depth, start) {
  if (depth == 6) {
    let result = [];
    for (let i of selected) result.push(array[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }

  for (let i = start; i < array.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(array, depth + 1, i + 1);
    selected.pop(i);
    visited[i] = false;
  }
}
