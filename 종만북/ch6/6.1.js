// 1부터 nRkwl 합을 반환

function sum(n){
    let sum = 0;
    for(i=1; i<=n; i++)
        sum += i;
    return sum;
}

function recursiveSum(n){
    if(n===1) return 1;
    return n+recursiveSum(n-1)
}

console.log(recursiveSum(10))
