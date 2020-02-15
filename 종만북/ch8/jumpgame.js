const SIZE = 100;
const arr = new Array(SIZE).fill(new Array(SIZE).fill(-1));
// 완전탐색 재귀로 풀어보기
// 기저조건: board의 크기를 넘어가는 경우 false/ board의 끝(SIZE-1, SIZE-1)에 도달한 경우 true를 반환
// true or false를 반환한다.
function jump(y,x){
    if(y >= SIZE) return false;
    if(x>=SIZE) return false;
    if(x == SIZE-1 && y == SIZE-1) return true; 
    const jumpSize = arr[y][x];
    return jump(y+jumpSize,x) || jump(y, x+jumpSize);
}

// cache를 적용해보기
// 기저조건: cache 된 값이 false면 return/ cache된 값이 true/-1 이면 계속 탐색을 한다. 
// board의 크기를 넘어가는 경우 false/ board의 끝(SIZE-1, SIZE-1)에 도달한 경우 true를 반환
const cache = new Array(SIZE).fill(new Array(SIZE).fill(-1))
function jump2(y, x){
    if(y >= SIZE) return false;
    if(x>=SIZE) return false;
    if(x == SIZE-1 && y == SIZE-1) return true; 

    if(cache[y][x] !== -1) return cache[y][x];
    const jumpSize = arr[y][x];
    return jump(y+jumpSize,x) || jump(y, x+jumpSize);
}