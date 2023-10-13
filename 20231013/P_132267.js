function solution(empty, refresh, coke) {
  let array = [];

  while (empty <= coke) {
    let newCoke = 0;
    let counter = Math.floor(coke / empty); // 바꿀 수 있는 횟수
    newCoke = refresh * counter; // 새로 받은 콜라
    coke %= empty; // 바꾸고 남은 콜라
    coke += newCoke; // 현재 남은 콜라

    array.push(newCoke);
  }

  let summary = 0;
  array.map((counter) => {
    summary += counter;
  });

  return summary;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/132267 콜라문제
