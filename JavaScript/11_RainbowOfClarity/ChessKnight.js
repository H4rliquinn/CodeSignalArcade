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

    for (let x in poss){
        if (poss[x].match(/[a-h][1-8]/)!=null) retVal++;
    }
    
    return retVal;
}

let c="c2";
console.log(chessKnight(c));
c="a1";
console.log(chessKnight(c));