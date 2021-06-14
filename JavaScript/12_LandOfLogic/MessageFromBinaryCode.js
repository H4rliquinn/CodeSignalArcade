function messageFromBinaryCode(code) {
    let retVal="";
    let pos=0;
    while (pos<code.length){
        console.log(code.slice);

        pos+=8;
    }
    // retVal+=getLetterFromBinary(code);


    return retVal
}

function getLetterFromBinary(byte){
    return String.fromCharCode(parseInt(byte,2).toString(10));
}
let c="01001000";
c="010010000110010101101100011011000110111100100001";
console.log(messageFromBinaryCode(c));