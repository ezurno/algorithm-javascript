const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);
let K = Number(input[1]);

let start = 1;
let end = 10 ** 10; //배열에 존재할 수 있는 가장 큰 값 10의 10제곱

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0; // mid 보다 작거나 같은 데이터의 갯수
  for (let i = 1; i <= N; i++) {
    // 각 행마다 계산
    total += Math.min(parseInt(mid / i), N);
  }

  if (K <= total) {
    // mid 보다 작거나 같은 데이터의 갯수가 k 이상이면
    result = mid; // result 에 기록
    end = mid - 1;
  } else start = mid + 1;
  // mid 보다 작거나 강튼 데이터 갯수가 k 미만이라면
}

console.log(result);
