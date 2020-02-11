let board= [["u","r","l","p","m"],["x","p","r","e","t"],["g","i","a","e","t"],["x","t","n","z","y"],["x","o","q","r","s"]]

const pointMaker = [[-1,1],[-1,0],[-1,-1],[0,1],[0,-1],[1,1],[1,0],[1,-1]]
function hasWord(x,y,word){
    try{
        if(board[x][y] !== word[0]){ return false;}
        if(word.length === 1) {
            console.log("find: ", x, y, word)
            return true;}
    
        
        for(let i=0; i<8; i++){
            const patch = pointMaker[i]
            console.log(x+patch[0], y+patch[1], word.slice(1))
            if(hasWord(x+patch[0], y+patch[1], word.slice(1))) return true
        }
    }catch(e){
        return false
    }
}

console.log(hasWord(2,0,"girl"))

/**
 * [풀이]
 * 1. 단어의 첫번째 글자와 board[x][y]가 일치하는지 판단.
 * 2. 그다음 단어가 이전 단어의 둘레에 존재하는지 판단.
 * 
 * [Point]   
 * 이전단어의 둘레 좌표를 구하기 위해서 pointMaker라는 별도의 변수를 만들어 쉽게 구한 것.
 * 기저조건을 설정해두었기 때문에 for문 안에서 좌표의 validation이 필요가 없었다. 
 * if(hasWord())
 */