const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);
let array = [];

for (let i = 1; i <= N; i++) {
  array.push(i);
}

let visited = new Array(N).fill(false);
let selected = [];

let answer = "";
function dfs(array, depth) {
  if (depth == N) {
    let result = [];
    for (let i of selected) result.push(i); // 최종 값을 selected 에서 가져옴
    for (let x of result) answer += `${x} `;
    answer += "\n";
    return; // 함수 종료
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    selected.push(array[i]);
    visited[i] = true;
    dfs(array, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(array, 0); // 0 에서 시작
console.log(answer);
