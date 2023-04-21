const fs = require("fs");
const { connected } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCases = Number(input[0]);
let line = 1;

for (let TC = 0; TC < testCases; TC++) {
  let [X, Y, A] = input[line].split(" ").map(Number);
  // x 는 x 축, y는 y 축, a 는 배추 갯수

  let graph = []; // 각 값에 해당하는 그래프 생성

  for (let i = 0; i < Y; i++) {
    graph[i] = new Array(X);
  }

  // console.log(graph);

  for (let i = 1; i <= A; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1; // 배추의 위치를 1로 표현
  }

  // console.log(graph);

  let counter = 0;

  for (let i = 0; i < Y; i++) {
    for (let j = 0; j < X; j++) {
      if (dfs(graph, Y, X, i, j)) counter += 1; // 만약 배추탐색이 완료되면 갯수 ++
    }
  }

  line += A + 1;
  console.log(counter);
}

function dfs(graph, Y, X, i, j) {
  if (i < 0 || j < 0 || Y <= i || X <= j) {
    return false;
  }

  if (graph[i][j] == 1) {
    graph[i][j] = -1;

    dfs(graph, Y, X, i - 1, j);
    dfs(graph, Y, X, i, j - 1);
    dfs(graph, Y, X, i + 1, j);
    dfs(graph, Y, X, i, j + 1);

    return true;
  }

  return false;
}
