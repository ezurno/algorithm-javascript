const fs = require("fs");
const { connected } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]); // 정점 수 N
let M = Number(input[1]); // 간선 수 M
let graph = [];

for (let i = 1; i <= N; i++) graph[i] = []; // 1부터 N 개의 빈 배열을 넣어줌
for (let i = 2; i <= M + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y); // x 에 연결 된 y 입력
  graph[y].push(x); // y 에 연결 된 x 입력
}

// console.log(graph);
// 각 노드 번호에 연결 된 값, 일부러 index 0 는 빈 배열로 제외 함

let counter = 0;
let visited = new Array(N + 1).fill(false);
// 방문여부를 알아야 하므로, N+1 인 이유는 0 을 비워두고 하기 때문

function dfs(node) {
  visited[node] = true; // 현재 노드에 대해 방문 처리
  counter += 1;

  for (let connected of graph[node]) {
    // 현재 노드에 연결 된 노드 방문
    if (!visited[connected]) {
      dfs(connected); // 만약 방문한 노드가 다른 노드와 연결이 더 되어 있을 경우
      // 재귀함수로 재방문
    }
  }
}

dfs(1); // 1번 노드부터 출발 하므로

console.log(counter - 1); // 1번 노드도 포함해서 센 값이기 때문에 1 감소
