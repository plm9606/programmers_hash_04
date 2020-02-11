function solution(tree){
    let answer =""

    if(tree.length === 1) return tree;

    for(let i in tree){
        let node = tree[i]
        if( node === x) {
           if(tree[i+1] != "x" && tree[i+2] != "x" && tree[i+3] != "x" && tree[i+4] != "x") {
               // ㅂㅏ꾼다
           }
        }
    }
}


console.log(solution("w"));
console.log(solution("xbwwb"))