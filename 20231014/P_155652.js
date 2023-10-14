function solution(s, skip, index) {
  let answer = "";
  let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  let newSkip = skip.split("");

  let filter = alphabet.filter((word) => {
    return !newSkip.includes(word);
  });

  s.split("").map((word) => {
    let targetIndex = filter.indexOf(word);
    if (targetIndex !== -1) {
      // 찾았을 경우
      answer += filter[(targetIndex + index) % filter.length];
    }
  });

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/155652 둘만의 암호
