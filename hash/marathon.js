// 완주하지 못한 선수
function solution(participant, completion) {
  var answer = "";
  const list = {};
  participant.forEach(name => {
    if (!list.hasOwnProperty(name)) {
      list[name] = 1;
    } else list[name] = list[name] + 1;
  });

  console.log(list);
  completion.forEach(name => {
    if (list.hasOwnProperty(name)) {
      if (list[name] == 1) {
        delete list[name];
      } else list[name] = list[name] - 1;
    }
  });

  const keys = Object.keys(list);
  for (let key of keys) {
    let count = list[key];
    for (let i = 0; i < count; i++) {
      answer += key + " ";
    }
  }
  console.log(answer);
  return answer;
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
