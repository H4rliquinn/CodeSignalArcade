function sudoku(grid) {
    let usedRow=[];
    let usedCol={};
    let usedSqr=[[[],[],[]],[[],[],[]],[[],[],[]]];
    //check lines
    for (let col in grid){
        for (let row in grid[col]){
            // Check Row
            if (usedRow.includes(grid[col][row])){
                return false;
            } else {
                usedRow.push(grid[col][row]);
            }
            // Check Col
            if (col==0){
                usedCol[row]=[grid[col][row]];
            } else {
                if (usedCol[row].includes(grid[col][row])){
                    return false;
                } else{
                    usedCol[row].push(grid[col][row])
                }
            }
            // Check squares
            let squareX=0;
            let squareY=0;
            if (col<3){
                squareY=0;
            } else if (col<6){
                squareY=1;
            } else {
                squareY=2;
            }
            if (row<3){
                squareX=0;
            } else if (row<6){
                squareX=1;
            } else {
                squareX=2;
            }
            if (usedSqr[squareY][squareX].includes(grid[col][row])){
                return false;
            } else {
                usedSqr[squareY][squareX].push(grid[col][row]);
            }
        
        }
        usedRow=[];
    }
    return true;
}

let grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
[4, 6, 5, 8, 7, 9, 3, 2, 1],
[7, 9, 8, 2, 1, 3, 6, 5, 4],
[9, 2, 1, 4, 3, 5, 8, 7, 6],
[3, 5, 4, 7, 6, 8, 2, 1, 9],
[6, 8, 7, 1, 9, 2, 5, 4, 3],
[5, 7, 6, 9, 8, 1, 4, 3, 2],
[2, 4, 3, 6, 5, 7, 1, 9, 8],
[8, 1, 9, 3, 2, 4, 7, 6, 5]];

console.log(sudoku(grid));

grid = [[1, 3, 2, 5, 4, 6, 9, 2, 7],
[4, 6, 5, 8, 7, 9, 3, 8, 1],
[7, 9, 8, 2, 1, 3, 6, 5, 4],
[9, 2, 1, 4, 3, 5, 8, 7, 6],
[3, 5, 4, 7, 6, 8, 2, 1, 9],
[6, 8, 7, 1, 9, 2, 5, 4, 3],
[5, 7, 6, 9, 8, 1, 4, 3, 2],
[2, 4, 3, 6, 5, 7, 1, 9, 8],
[8, 1, 9, 3, 2, 4, 7, 6, 5]];

console.log(sudoku(grid));