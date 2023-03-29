const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// Mac, Linux 는 유닉스 기반이라 /dev/stdin 으로 인해 터미널 상에서 데이터값을 입력 할 수 있음
// 하지만 window는 불가능하기 때문에 /input.txt 파일을 따로 만들어서 테스트 해주어야 함
let input = fs.readFileSync(filePath).toString().split("\n");
// fs-module 을 사용하여 입력값 받아오기

let line = input[0].split(" ");

let store = Number(line[0]);

function calculator(store) {
  if (90 <= store && store <= 100) {
    return console.log("A");
  } else if (80 <= store && store <= 89) {
    return console.log("B");
  } else if (70 <= store && store <= 79) {
    return console.log("C");
  } else if (60 <= store && store <= 69) {
    return console.log("D");
  } else {
    return console.log("F");
  }
}

calculator(store);
