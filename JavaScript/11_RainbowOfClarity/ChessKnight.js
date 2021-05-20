function chessKnight(cell) {
    //2 Steps
    console.log(String.fromCharCode(cell[0].charCodeAt()+2));
    console.log(String.fromCharCode(cell[0].charCodeAt()-2));
    console.log(String.fromCharCode(cell[1].charCodeAt()+2));
    console.log(String.fromCharCode(cell[1].charCodeAt()-2));
    //1 Step
    console.log(String.fromCharCode(cell[0].charCodeAt()+1));
    console.log(String.fromCharCode(cell[0].charCodeAt()-1));
    console.log(String.fromCharCode(cell[1].charCodeAt()+1));
    console.log(String.fromCharCode(cell[1].charCodeAt()-1));

}

let c="c2";
console.log(chessKnight(c));