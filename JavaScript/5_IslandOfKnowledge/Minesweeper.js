function minesweeper(matrix) {
 let retMtx=new Array(matrix.length).fill(0).map(()=>new Array(matrix.length).fill(0));
 let len=matrix.length;
 for (let y=0;y<len;y++){
     for (let x=0;x<len;x++){
         if (matrix[y][x]==true){
            //  if (y>0 && y<len) matrix[y][x]++;
            //  if (matrix[y-1][x]) matrix[y][x]++;

         }
     }
 }

 return retMtx;
}

let matrix = [[true, false, false],
[false, true, false],
[false, false, false]];

console.log(minesweeper(matrix));