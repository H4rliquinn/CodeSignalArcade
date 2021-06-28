function seatsInTheater(nCols, nRows, col, row) {
    return (nCols-(col-1))*(nRows-row);
}

let nCols=16;
let nRows=11;
let col=5;
let row=3;

console.log(seatsInTheater(nCols,nRows,col,row));