const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [R, C] = input[0].split(" ").map(Number);
let array = [];
let visited = new Array(26).fill(false); // 알파벳이 26글자이기 때문
// Set() 을 사용하고 싶지만 set을 사용하면 시간 초과가 남

for (let i = 1; i <= R; i++) array.push(input[i]);

let moveX = [-1, 1, 0, 0]; // 상하좌우
let moveY = [0, 0, -1, 1];
let max = 0;

function dfs(depth, x, y) {
  max = Math.max(max, depth);
  for (let i = 0; i < 4; i++) {
    // 상하좌우 4방향 움직임
    let currentX = x + moveX[i];
    let currentY = y + moveY[i];

    if (isValid(currentX, currentY)) {
      // 해당 배열 범위 내에 있는지
      if (visited[array[currentX][currentY].charCodeAt() - 65] === false) {
        visited[array[currentX][currentY].charCodeAt() - 65] = true;
        dfs(depth + 1, currentX, currentY);
        visited[array[currentX][currentY].charCodeAt() - 65] = false;
      }
    }
  }
}
visited[array[0][0].charCodeAt() - 65] = true; // (0, 0) 에서 출발
dfs(1, 0, 0);
console.log(max);

function isValid(x, y) {
  if (x < 0 || R <= x || y < 0 || C <= y) return false;
  else return true;
}
