function chessKnight(cell) {
    let retVal=0;
    let poss=[];

    poss.push(String.fromCharCode(cell[0].charCodeAt()+2)+String.fromCharCode(cell[1].charCodeAt()+1))
    poss.push(String.fromCharCode(cell[0].charCodeAt()+2)+String.fromCharCode(cell[1].charCodeAt()-1))
    
    poss.push(String.fromCharCode(cell[0].charCodeAt()-2)+String.fromCharCode(cell[1].charCodeAt()+1))
    poss.push(String.fromCharCode(cell[0].charCodeAt()-2)+String.fromCharCode(cell[1].charCodeAt()-1))
    
    poss.push(String.fromCharCode(cell[0].charCodeAt()+1)+String.fromCharCode(cell[1].charCodeAt()-2))
    poss.push(String.fromCharCode(cell[0].charCodeAt()-1)+String.fromCharCode(cell[1].charCodeAt()-2))
    
    poss.push(String.fromCharCode(cell[0].charCodeAt()+1)+String.fromCharCode(cell[1].charCodeAt()+2))
    poss.push(String.fromCharCode(cell[0].charCodeAt()-1)+String.fromCharCode(cell[1].charCodeAt()+2))


    
    return retVal;

}

let c="c2";
console.log(chessKnight(c));