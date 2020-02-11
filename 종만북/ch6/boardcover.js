const LMaker = [[[0,1],[1,1]],
                [[1,0],[1,1]],
                [[1,0],[0,1]],
                [[1,-1],[1,0]]]

function blockCover(h,w,board){
    let whiteBlockCount = 0;
    let answer =0;

    board.forEach(row=>{
        row.forEach(b=>{
            if(b == 0) whiteBlockCount++;
        })
    })

    if(whiteBlockCount === 0 ) return 1;
    if(whiteBlockCount%3 !== 0) return 0;

    for(let row=0; row<h; row++){
        for(let col=0; col<w; col++){
            if(board[row][col] === 1) continue;
            for(let i=0; i<LMaker.length;i++){
                const maker = LMaker[i];
                if(row ==1) debugger;
                const blockPoints = isLBlock(board,maker,w,h,row,col)
                if(blockPoints.length==0) continue;
                
                const cpy_board = JSON.parse(JSON.stringify(board));
                blockPoints.forEach(point=>{
                    cpy_board[point[0]][point[1]] = 1;
                    // console.log(point)
                })
                cpy_board[row][col] = 1;
                // console.log(`[${row}, ${col}]`);
                // console.log("---------------------------")
                answer += blockCover(h,w,cpy_board)
            }
        }
    }

    return answer;
}


function isLBlock(board,maker,w,h,row,col){ 
    let blocks = []
    for(let i=0; i<2; i++){
        const madeRow = row + maker[i][0];
        const madeCol = col + maker[i][1];
        if(madeRow < 0 || madeRow >= h || madeCol < 0 || madeCol >= w) {
            blocks = [];
            break;
        }
        if(board[madeRow][madeCol] === 1){
            blocks = [];
            break;
        }
        if(i === 1){
            const point = [];
            blocks.push([madeRow, madeCol]);
            blocks.push([row+maker[0][0], col + maker[0][1]])
            // blocks.push(point)
        }
    }

    return blocks;
}

// console.log(blockCover(3,7,[[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,1,0,0,0,1,1]]))
console.log(blockCover(3,7,[[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,1,0,0,1,1,1]]))
console.log(blockCover(8,10,[[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1]]))

/**
 * 수도코드는 맞는데 코드상에서 뭔가 안맞는다....
 * 재귀를 빠져나가는 코드가 이상한거같음.
 * 
 * (0,0)부터 차례대로 좌표를 탐색한다.
 * 좌표가 0일 경우 L자 블록 모양이 가능한지 검사한다. 
 * 블록을 만들 수 있다면 해당 블록좌표를 1로 바꾸고 (복사된 board에) board카피본으로 재귀를 호출한다. 
 * 희블록이 없다면 모든 블록을 맞춘 것이므로 1을 리턴한다. 
 * 
 * 나는 board의 복사본을 재귀에 넘겼고 책에서는 원본을 수정해 원본을 넘겨준 뒤에 다시 수정 전의 좌표로 바꾸는 작업을 했다. 
 */