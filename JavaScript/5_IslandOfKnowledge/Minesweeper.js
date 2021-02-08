function minesweeper(matrix) {
 let retMtx=new Array(matrix.length).fill(0).map(()=>new Array(matrix.length).fill(0));

 for (let y=0;y<matrix.length;y++){
     for (let x=0;x<matrix[y].length;x++){
         console.log(matrix[y][x]);
     }
 }

 return retMtx;
}

let matrix = [[true, false, false],
[false, true, false],
[false, false, false]];

console.log(minesweeper(matrix));