function solution(genres, plays) {
  var answer = [];
  const list = {};

  genres.forEach((song, idx) => {
    if (!list.hasOwnProperty(song)) {
      list[song] = {};
      list[song]["total"] = 0;
      list[song]["list"] = [];
    }
    list[song]["total"] += plays[idx];
    list[song]["list"].push({ idx: idx, plays: plays[idx] });
  });

  const keys = Object.keys(list);
  let max = -1;
  let maxKey = "";

  keys.forEach(key => {
    list[key]["list"].sort((a, b) => {
      if (a.plays > b.plays) return -1;
      if (a.plays < b.plays) return 1;
      if (a.idx > b.idx) return 1;
      if (a.idx < b.idx) return -1;
    });
  });

  while (keys.length > 0) {
    for (let key of keys) {
      if (max < list[key]["total"]) {
        max = list[key]["total"];
        maxKey = key;
      }
    }
    for (let i = 0; i < 2; i++) {
      if (list[maxKey]["list"].length === 0) break;
      const song = list[maxKey]["list"].shift();
      const idx = song.idx;
      answer.push(idx);
    }

    delete list[maxKey];
    keys.splice(keys.indexOf(maxKey), 1);
    max = -1;
  }

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop", "jazz"],
    [500, 600, 150, 800, 2500, 100]
  )
);

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [800, 600, 150, 800, 2500]
  )
);

/**
 * Array.prototype.sort()함수 프로퍼티에 소팅 함수를 인자로 넣을 수 있다.
 * 첫 번째 인수가 두 번째 인수보다 작을 경우 - 값
 * 두 인수가 같을 경우 0
 * 첫 번째 인수가 두 번째 인수보다 클 경우 + 값
 *
 * 이 콜백을 잘 사용하면 쉽게 배열을 소팅할 수 있을 것 같다.
 */
