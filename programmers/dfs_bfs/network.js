function solution(n, computers) {
  var answer = 0;
  const list = {};
  // isUsedNode 배열 선언만하고 사용하지 않기 때문에 삭제해야함
  const isUsedNode = [];

  for (let i = 0; i < n; i++) isUsedNode.push(false);

  // 인접배열을 이용해서 인접리스트 느낌의 map을 추출하는 코드
  // 이미 인접 배열이 주어졌으므로 이를 활용해서 탐색하는것이 더 낫다.
  // 불필요하게 인접리스트를 만들 필요는 없다
  computers.forEach((row, i) => {
    row.forEach((node, j) => {
      if (computers[i][j] === 1) {
        if (i === j) return;
        if (!list.hasOwnProperty(i)) list[i] = [];
        list[i].push(j);
        isUsedNode[j] = true;
        isUsedNode[i] = true;
      }
    });
    if (!list.hasOwnProperty(i)) list[i] = [];
  });

  const queue = [];
  let visited = [];

  while (Object.keys(list).length > 0) {
    const firstKey = Object.keys(list)[0];
    queue.push(firstKey);
    while (queue.length > 0) {
      const idx = queue.shift();
      bfs(idx);
    }

    if (visited.length > 0) {
      answer++;
      visited.forEach(nodeIdx => {
        delete list[nodeIdx];
      });
      visited = [];
    }
  }

  function bfs(index) {
    visited.push(index);
    const linkedList = list[index];
    if (linkedList.length === 0) return;

    linkedList.forEach(nodeIdx => {
      if (visited.indexOf(nodeIdx) === -1 && queue.indexOf(nodeIdx) === -1)
        queue.push(nodeIdx);
    });
  }
  return answer;
}
