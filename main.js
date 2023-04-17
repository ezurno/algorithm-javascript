const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);
let chess = []; // queen 이 놓인 위치를 적는 배열
let counter = 0;

function possible(x, y) {
  for (let [a, b] of chess) {
    if (a == x || b == y) return false;
    // 해당하는 chess 판에 놓인 queen 의 위치 중 x, y 축이 같을 시 false
    if (Math.abs(a - x) == Math.abs(b - y)) return false;
    // 대각선에 놓여있을 시 false
  }

  return true;
}

function dfs(row) {
  if (row == N) counter += 1;

  for (let i = 0; i < N; i++) {
    if (!possible(row, i)) continue; // 조건을 만족하지 않았을 시
    chess.push([row, i]); // 조건을 만족할 시 queen 을 놓음
    dfs(row + 1); // 다음 행에 배치 (재귀함수 호출)
    chess.pop();
  }
}

dfs(0);
console.log(counter);
