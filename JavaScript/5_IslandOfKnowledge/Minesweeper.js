function minesweeper(matrix) {
 let retMtx=new Array(matrix.length).fill(0).map(()=>new Array(matrix.length).fill(0));


 return retMtx;
}

let matrix = [[true, false, false],
[false, true, false],
[false, false, false]];

console.log(minesweeper(matrix));