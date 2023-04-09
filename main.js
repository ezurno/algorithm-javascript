const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) {
    i += 1;
  }

  return i - 1;
} // x 보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수

let [length, width, height] = input[0].split(" ").map(Number);
let N = Number(input[1]);
let cubes = new Array(20).fill(0); // 10의 20승

for (let i = 2; i < N + 2; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  cubes[A] = B; // 해당 하는 사이즈에 맞는 큐브 규격에 갯수를 넣음
}

let minSize = [length, width, height].reduce((a, b) => Math.min(a, b));
// 세 길이 중 가장 작은 길이를 기준
let size = nearestSquare(minSize); // 그 값으로 가장 유사한 2^i 를 찾음

let result = 0;
let used = 0; // 사용한 큐브의 갯수

for (let i = size; 0 <= i; i--) {
  // 최대 크기의 큐브부터
  used *= 8;
  current = 2 ** i; // 현재 정뮥면체의 규브 길이

  let required =
    parseInt(length / current) *
      parseInt(width / current) *
      parseInt(height / current) -
    used; // 채워넣어야 할 큐브의 갯수 계산

  let usage = Math.min(required, cubes[i]); // 이번 단계에서 넣을 수 있는 큐브의 수
  result += usage;
  used += usage;
}

if (used == length * height * width) console.log(result);
else console.log(-1);
