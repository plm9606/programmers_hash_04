const coverType = [
    [[0,0], [1,0], [0,1]],
    [[0,0], [0,1], [1,1]],
    [[0,0], [1,0], [1,1]],
    [[0,0], [1,0], [1,-1]]
]

function set(board, x, y, type, delta){
    const OK = true;

    for(let i=0; i<3; i++){
        const ny = coverType[type][i][0];
        const nx = coverType[type][i][1];

        if(ny < 0 || nx < 0 || ny >= board.length || nx >= board[0].length) OK = false;
        else if((board[ny][nx] += delta) > 1) OK = false;
    }
    return OK;
    
}