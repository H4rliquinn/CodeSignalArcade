function minesweeper(matrix) {
 let retMtx=new Array(matrix.length).fill(0).map(()=>new Array(matrix.length).fill(0));
 let len=matrix.length;
 for (let y=0;y<len;y++){
     for (let x=0;x<len;x++){
         if (matrix[y][x]==true){
            //Determine where to add to count based on bomb position
            let countY=[0];
            let countX=[0];
            if (y>0)countY.push(-1);
            if (y<len-1)countY.push(1);
            if (x>0)countX.push(-1);
            if (x<len-1)countX.push(1);
            // console.log("adds",y,x,countY,countX);

            //Add to count around current bomb
            for (let a in countY){
                for (let b in countX){
                    if (!(countY[a]==0 && countX[b]==0)) retMtx[y+countY[a]][x+countX[b]]++;
                    // console.log("Added:",b,a,retMtx);
                    // console.log("A&B",countY[a],countX[b],retMtx[y+countY[a]][x+countX[b]]);
                }
            }
         }
     }
 }
 return retMtx;
}

let matrix = [[true, false, false],
[false, true, false],
[false, false, false]];

console.log(minesweeper(matrix));

matrix = [[true, false, false],
        [false, true, false],
        [false, true, true]];

console.log(minesweeper(matrix));