const N = 8;
const arr = []
const row = []

for(let i=0; i<N; i++){
    row.push(0)
}

for(let i=0; i<N; i++){
    arr.push(row)
}

function fill(y,x){
    if(y >= N || x>= N || y < 0 || x < 0) return;
    arr[y][x] = 1;
    fill(y+1,x);
    fill(y, x+1);
    fill(y-1, x);
    fill(y, x-1);
    fill(y+1, x+1);
    fill(y+1, x-1);
    fill(y-1, x+1);
    fill(y-1, x-1);
}

fill(0,0);
console.log(arr)