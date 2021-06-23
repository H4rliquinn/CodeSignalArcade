function sudoku(grid) {
    let used=[];
    //check lines
    for (let col in grid){
        for (let row in grid[col]){
            if (used.includes(grid[col][row])){
                return false;
            } else {
                used.push(grid[col][row]);
            }
        }
        used=[];
    }
    console.log(used);
    //check columns

    
    //check squares

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