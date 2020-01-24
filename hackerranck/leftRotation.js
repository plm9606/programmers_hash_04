function rotLeft(arr, rotation) {
  let answer = [];

  while (rotation > 0) {
    const temp = arr.slice(1);
    temp.push(arr[0]);
    arr = temp;
    rotation--;
  }

  return arr;
}

/**
 * time limit
 */
