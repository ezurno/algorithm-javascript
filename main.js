const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);
let array = input[1].split(" ").map(Number);
let money = Number(input[2]);

let start = 1; // 이진탐색으로 상한선을 찾기 위해 최소 예산 1
let end = array.reduce((a, b) => Math.max(a, b)); // 최대 값을 end로 잡음

let result = 0; // 최종 값을 담을 변수
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 상한선
  let total = 0;

  for (target of array) {
    total += Math.min(target, mid); // 가장 값이 작은걸 기준으로 total 총 예산을 계산
  }

  if (total <= money) {
    // 총 합해진 예산이 money 보다 적을 때 상한선을 올림
    start = mid + 1;
    result = mid; // 예산을 result 에 저장
  } else {
    // 예산이 더 클 시 상한액을 감소 시키기
    end = mid - 1;
  }
}

console.log(result);
