function solution(name, yearning, photo) {
  var answer = [];

  photo.map((people) => {
    let summary = 0;

    people.forEach((target) => {
      let index = name.indexOf(target);
      if (index !== -1) {
        summary += yearning[index];
      }
    });

    answer.push(summary);
  });

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/176963
