const fs = require("fs");
const { connected } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [node, cycle] = input[0].split(" ").map(Number);
let graph = [];

for (let i = 1; i <= node; i++) graph[i] = []; // graph 생성
for (let i = 1; i < node; i++) {
  let [a, b, value] = input[i].split(" ").map(Number);
  graph[a].push([b, value]);
  graph[b].push([a, value]);
}

// console.log(graph);

function dfs(a, dist) {
  if (visited[a]) return;
  visited[a] = true;
  distance[a] = dist;
  for (let [b, value] of graph[a]) dfs(b, dist + value);
}

for (let i = 0; i < cycle; i++) {
  let [a, b] = input[node + i].split(" ").map(Number);
  visited = new Array(node + 1).fill(false);
  distance = new Array(node + 1).fill(-1);

  dfs(a, 0);
  console.log(distance[b]);
}
