function checkMagazine(magazine, note) {
  let answer = "";
  function mappingCallback(acc, word) {
    if (!acc.hasOwnProperty(word[0])) {
      acc[word[0]] = [];
    }
    acc[word[0]].push(word);
    return acc;
  }

  const magazineMap = magazine.reduce(mappingCallback, {});
  const noteMap = note.reduce(mappingCallback, {});

  const keys = Object.keys(noteMap);

  for (let key of keys) {
    if (!magazineMap.hasOwnProperty(key)) {
      console.log("No0");
      answer = "No";
      return;
    }
    const noteWordList = noteMap[key].sort();
    const magazineWordList = magazineMap[key].sort();

    while (noteWordList.length > 0) {
      const word = noteWordList.shift();

      // console.log(word, noteWordList, magazineWordList)
      let idx;
      for (let i = 0; i < magazineWordList.length; i++) {
        if (magazineWordList[i] === word) {
          idx = i;
          break;
        }
      }
      // console.log(idx)
      if (idx === undefined) {
        console.log("No1");
        answer = "No";
        return;
      }
      magazineWordList.splice(idx, 1);
    }

    if (noteWordList.length > 0) {
      console.log("No2");
      answer = "No";
      break;
    }
  }
  if (answer === "") console.log("Yes");
  return answer;
}
checkMagazine(["zz", "z"], ["zz"]);
checkMagazine(
  [
    "avtq",
    "ekpvq",
    "z",
    "rdvzf",
    " m",
    " zu",
    "bof",
    "pfkzl",
    "ekpvq",
    "pfkzl",
    "bof",
    "zu",
    "ekpvq",
    "ekpvq",
    "ekpvq",
    "ekpvq",
    "z"
  ],
  [
    "m",
    "z",
    "z",
    "avtq",
    "zu",
    "bof",
    "pfkzl",
    "pfkzl",
    "pfkzl",
    "rdvzf",
    "rdvzf",
    "avtq",
    "ekpvq",
    "rdvzf",
    "avtq"
  ]
);

checkMagazine(
  [
    "o",
    "l",
    "x",
    "imjaw",
    "bee",
    "khmla",
    "v",
    "o",
    "v",
    "o",
    "imjaw",
    "l",
    "khmla",
    "imjaw",
    "x"
  ],
  [
    "imjaw",
    "l",
    "khmla",
    "x",
    "imjaw",
    "o",
    "l",
    "l",
    "o",
    "khmla",
    "v",
    "bee",
    "o",
    "o",
    "imjaw",
    "imjaw",
    "o"
  ]
);

/**
 * 20번째 줄에서 while문을 나오기 위해 break를 사용했음
 * break를 사용하니까 for(key of keys) 루프까지 빠져나오지 못하고 while문만 빠져나오게 되어서 for 루프를 계속 도는 현상 발생
 * 그래서 No가 한번 출력되어야 하는데 NoNoNo.. 와 같이 여러번 출력되었다.
 *
 * while문에서 break대신 return을 사용하니 for루프까지 빠져나오게 됨
 *
 * for.. of에서는 return 사용 불가능했던거 같은데?
 */

function segment(x, arr) {
  // Write your code here
  let DO_SORT = false;
  let answer;
  if (x === 1) {
    arr.sort((a, b) => b - a);
    answer = arr.shift();
    return answer;
  }
  if (x === arr.length) {
    arr.sort((a, b) => a - b);
    answer = arr.shift();
    return answer;
  }

  const temp = [];

  // for(let i=0; i<=arr.length-x; i++){
  //     let min = i;
  //     for(let j=1; j<x; j++){
  //         if(arr[i+j] < arr[min]){
  //             min = i+j;
  //         }
  //     }
  //     temp.push(arr[min])
  // }

  // function getMin(){
  //     let min = Infinity;
  //     memo.forEach(cost=>{
  //         if(min > cost) min = cost;
  //     })
  //     return min;
  // }

  function getMin() {
    sortedMemo.sort((a, b) => a - b);
    return sortedMemo[0];
  }

  const memo = [];
  const sortedMemo = [];

  for (let i = 0; i <= arr.length - x; i++) {
    if (i === 0) {
      for (let j = 0; j < x; j++) {
        memo.push(arr[i + j]);
        sortedMemo.push(arr[i + j]);
      }
      let min = getMin();
      temp.push(min);
      const removal = memo.shift();
      sortedMemo.splice(sortedMemo.indexOf(removal), 1);
      continue;
    }
    const item = arr[i + x - 1];
    memo.push(item);

    // let min = getMin();
    let min;
    if (item < sortedMemo[0]) {
      min = item;
      sortedMemo.unshift(item);
    } else {
      min = sortedMemo[0];
      sortedMemo.push(item);
      DO_SORT = true;
    }

    if (temp[0] < min) temp.unshift(min);
    else temp.push(min);
    const removal = memo.shift();
    sortedMemo.splice(sortedMemo.indexOf(removal), 1);
    if (DO_SORT) {
      sortedMemo.sort((a, b) => a - b);
      DO_SORT = false;
    }
  }

  // temp.sort((a,b)=>a-b);
  // answer = temp.pop();

  answer = temp.shift();
  return answer;
}
