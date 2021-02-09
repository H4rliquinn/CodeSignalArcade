function minesweeper(matrix) {
 let retMtx=new Array(matrix.length).fill(0).map(()=>new Array(matrix.length).fill(0));
 let len=matrix.length;
 for (let y=0;y<len;y++){
     for (let x=0;x<len;x++){
         if (matrix[y][x]==true){
            let countY=[0];
            let countX=[0];
            if (y>0)countY.push(-1);
            if (y<len-1)countY.push(1);
            if (x>0)countX.push(-1);
            if (x<len-1)countX.push(1);
            console.log(x,y,countY,countX);

         }
     }
 }

 return retMtx;
}

let matrix = [[true, false, false],
[false, true, false],
[false, false, false]];

console.log(minesweeper(matrix));