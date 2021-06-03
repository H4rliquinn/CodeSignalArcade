function differentSquares(matrix) {
    let lib={};
    let retVal=0;
    for (let y=0;y<matrix.length-1;y++){
        for (let x=0;x<matrix[y].length-1;x++){
            let square=""+matrix[y][x]+matrix[y][x+1]+matrix[y+1][x]+matrix[y+1][x+1]
            if (lib[square]==null){
                lib[square]=1;
                retVal++;
            }
        }
    }
    return retVal
}

let matrix = [[1, 2, 1],
[2, 2, 2],
[2, 2, 2],
[1, 2, 3],
[2, 2, 1]]

console.log(differentSquares(matrix));