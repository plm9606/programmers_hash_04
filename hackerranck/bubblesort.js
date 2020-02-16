
// Complete the countSwaps function below.
function countSwaps(a) {
    let numSwap=0;
    for(let i=0; i<a.length-1; i++){
        for(let j=0; j<a.length-i-1;j++){
            swap(j, j+1)
        }
    } 

    function swap(x, y){
        if(a[x] > a[y]){
            numSwap += 1;
            const temp = a[x];
            a[x] = a[y];
            a[y] = temp;
        }
    }   

    console.log("Array is sorted in "+numSwap+" swaps.")
    console.log("First Element:", a[0]);
    console.log("Last Element:", a[a.length-1])
}
