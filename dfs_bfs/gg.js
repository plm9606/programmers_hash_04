function solution(begin, target, words) {
  function getTargetIndex(target) {
    return words.indexOf(target);
  }

  function checkOneDiffrent(word1, word2) {
    let result = 0;
    for (let index = 0; index < word1.length; index++) {
      if (word1[index] !== word2[index]) result++;
    }
    return result === 1 ? true : false;
  }

  function makeDataStructure(words) {
    const structure = [];
    structure.length = words.length;
    for (let i = 0; i < structure.length; i++) {
      structure[i] = [];
    }

    structure.forEach((nodes, index) => {
      for (let i = 0; i < structure.length; i++) {
        if (checkOneDiffrent(words[index], words[i]) && index !== i)
          nodes[i] = true;
        else nodes[i] = false;
      }
    });

    return structure;
  }

  const queue = [];

  function findTarget(struct, begin, queue) {
    if (queue.length !== 0) {
      const node = queue.shift();
      const curIndex = node["index"];
      let curDepth = node["depth"];
      const curWord = words[curIndex];
      if (checkOneDiffrent(curWord, begin)) {
        return curDepth;
      }
      struct[curIndex].forEach((node, index) => {
        if (node === true) queue.push({ index: index, depth: curDepth + 1 });
      });

      return findTarget(struct, begin, queue);
    }
  }

  const targetIndex = getTargetIndex(target);

  if (targetIndex === -1) return 0;

  const struct = makeDataStructure(words);

  var answer = 0;
  queue.push({ index: targetIndex, depth: 1 });
  answer = findTarget(struct, begin, queue);

  return answer;
}

const res = solution("hit", "let", ["hot", "lot", "got", "let", "gor"]);
console.log(`answer is ${res}`);
