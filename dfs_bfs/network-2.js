function solution(n, computers) {
  var answer = 0;
  const isVisited = [];

  for (let i = 0; i < n; i++) {
    isVisited.push(false);
  }

  isVisited.forEach((visited, idx) => {
    if (visited) return;

    dfs(idx);
    answer++;
  });

  function dfs(index) {
    const linkedList = computers[index];

    linkedList.forEach((node, nodeIdx) => {
      if (index !== nodeIdx && node == 1 && !isVisited[nodeIdx]) {
        isVisited[nodeIdx] = true;
        dfs(nodeIdx);
      }
    });
  }
  return answer;
}
