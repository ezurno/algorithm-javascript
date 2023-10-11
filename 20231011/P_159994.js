function solution(cards1, cards2, goal) {
  let answer = "Yes";
  let currentIndex = 0;

  goal.map((card) => {
    if (cards1[currentIndex] === card) {
      cards1.shift();
    } else if (cards2[currentIndex] === card) {
      cards2.shift();
    } else {
      answer = "No";
    }
  });

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/159994
