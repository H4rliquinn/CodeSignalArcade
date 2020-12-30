function matrixElementsSum(matrix) {
    let total=0;
    //Work through matrix by length first
    for (let x=0;x<matrix[0].length;x++){
        //Work down the height
        for (let y=0;y<matrix.length;y++){
            if (matrix[y][x]>0){
                total=total+matrix[y][x];
            } else {
                //Stop when you find a ghost
                break;
            }
        }
    }
    return total;
}

let matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
          
let matrix2 = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]  

console.log(matrixElementsSum(matrix));
console.log(matrixElementsSum(matrix2));