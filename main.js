const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCase = Number(input[0]);
let line = 1;

for (let i = 0; i < testCase; i++) {
  let cycle = Number(input[line]); // 새로 들어오는 값
  let array = []; // testCase를 받을 array

  for (let j = line + 1; j <= line + cycle; j++) {
    let recruit = input[j].split(" ").map(Number);
    array.push(recruit);
  }

  array.sort((a, b) => {
    return a[0] - b[0]; // 첫 번째 시험으로 순위 순으로 정렬
  });

  // console.log(array);

  let count = 0;
  let cutLine = Number.MAX_VALUE; // 최솟값을 구하기 위해 수 중 제일 큰 값을 부여

  for (let [a, b] of array) {
    // array 내에 있는 첫 시험 a, 두번째 시험 b로 분할
    if (b < cutLine) {
      cutLine = b; // 순위 별로 두번째 시험이 최솟 값 보다 적으면 cutLine 초기화
      count += 1;
    }
  }

  console.log(count);
  line += cycle + 1;
}
