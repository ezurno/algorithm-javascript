const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function palindrome(word) {
  return word == word.split("").reverse().join(""); // 뒤집어서 새 배열을 만듦
}

let testCase = Number(input[0]);
for (let i = 1; i <= testCase; i++) {
  let word = input[i].trim();
  // 줄 넘기기가 되어 있기 때문에 trim()으로 제거 해줘야 정상 작동

  if (palindrome(word)) console.log(0);
  else {
    // 회문이 아닌경우
    let similar = false;
    let length = word.length;
    for (let j = 0; j < parseInt(length / 2); j++) {
      // 절반으로 나눠서 비교
      if (word[j] != word[length - j - 1]) {
        // 맞지않는 index 값을 찾았을 경우
        if (palindrome(word.slice(0, j) + word.slice(j + 1, length)))
          similar = true;
        // 해당 앞의 단어를 지워보고 검사, 맞다면 유사회문
        if (
          palindrome(
            word.slice(0, length - j - 1) + word.slice(length - j, length)
          )
        )
          // 해당 뒤의 단어를 지워보고 검사, 맞다면 유사회문
          similar = true;
        break;
      }
    }

    if (similar) console.log(1);
    else console.log(2);
  }
}
