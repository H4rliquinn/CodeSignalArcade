function differentSquares(matrix) {
    for (let y=0;y<matrix.length-1;y++){
        for (let x=0;x<matrix[y].length-1;x++){
            console.log(matrix[y][x]);
        }
    }
}

let matrix = [[1, 2, 1],
[2, 2, 2],
[2, 2, 2],
[1, 2, 3],
[2, 2, 1]]

console.log(differentSquares(matrix));