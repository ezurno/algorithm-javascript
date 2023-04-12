const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let array = []; // 순열을 게산하고자 하는 원소가 담긴 배열

for (let i = 1; i <= N; i++) {
  array.push(i);
}

let visited = new Array(N).fill(false); // 방문여부를 담는 array
let selected = []; // 선택 한 값의 array

let answer = "";
function dfs(array, depth) {
  if (depth == M) {
    // 깊이가 최고 깊이까지 도달 했을 시
    let result = []; // 순열 결과 저장하는 배열
    for (let i of selected) result.push(array[i]);
    for (let x of result) answer += `${x} `; // 계산된 순열을 실직적으로 담음
    answer += "\n";
    return; // 함수 종료
  }

  for (let i = 0; i < array.length; i++) {
    if (visited[i]) continue; // 이미 방문 헀을 시 무시
    selected.push(i); // 현재 원소 선택
    visited[i] = true; // 현재 원소를 방문 처리 함
    dfs(array, depth + 1); // 재귀함수 호출
    selected.pop(); // 최종으로 끝날 때 selected 내 값을 뺴줘야 다음 진행이 가능하므로
    visited[i] = false; // 해당 원소 방문처리 취소
  }
}

dfs(array, 0);
console.log(answer);
