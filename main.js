const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);
let array = [];
let visited = new Array(N).fill(false);

for (let i = 0; i <= N; i++) array.push([0]);
for (let i = 1; i <= N; i++) {
  let line = input[i].split(" ").map(Number); // 각 라인 값 찢어서 다시 넣기
  for (let j = 0; j < N; j++) array[i].push(line[j]);
}

let result = [];
let minValue = 1e9;

function dfs(depth) {
  // 1에서부터 출발 하므로 2부터 n 까지
  if (depth == N - 1) {
    let totalCost = 0;
    let current = 1; // 1번 노드에서 출발

    for (let i = 0; i < N - 1; i++) {
      let next = result[i];
      let cost = array[current][next];

      if (cost == 0) return;
      totalCost += cost;
      current = next;
    }

    let cost = array[current][1]; // 다시 1로 돌아오는 것이 필수
    if (cost == 0) return;
    totalCost += cost;
    minValue = Math.min(minValue, totalCost);
  }

  for (let i = 2; i <= N; i++) {
    if (visited[i]) continue;
    result.push(i);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(minValue);
