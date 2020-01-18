// 위장

function solution(clothes) {
  var answer = 1;
  const list = {};
  clothes.forEach(item => {
    if (!list.hasOwnProperty(item[1])) {
      list[item[1]] = 1;
    } else list[item[1]] = list[item[1]] + 1;
  });

  const keys = Object.keys(list);

  for (let key of keys) {
    answer *= list[key] + 1;
  }
  return answer - 1;
}

/**
 * list = {eye:2, bottom:2, top:1} 일 경우
 * 처음에는 (2+2+1)+(2*2+2*1+2*1)+(2*2*1)을 구하는 로직을 생각했다.
 * 하지만 프로퍼티의 수가 변할때마다 로직이 바껴서 구현이 어려웠다.
 * eye:2 라는 의미는 eye관련 의상을 2개에서 선택할수 있다는 말인다.
 * 하지만 eye 의상을 사용하지 않는 경우도 존재한다.
 * 따라서 각 프로퍼티에 해당 의상을 착용하지 않는 경우를 더해준다 (+1)
 * 그리고 나서 조합으로 3*3*2를 해주면 의상을 착용하지 않는 경우까지 구할 수 있다.
 * 여기서는 모든 의상을 착용하지 않는 경우까지 포함되기 때문에 마지막에 -1을 해준다.
 */
