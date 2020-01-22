// 완주하지 못한 선수
function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);

/**
 * 문제의 제약 조건을 잘 살펴야 한다.
 * 문제에서 participant의 길이가 completion보다 1만큼 크다고 제약사항을 걸었다.
 * 따라서 리턴은 1개뿐, 완주하지 못한 선수는 한명
 */
