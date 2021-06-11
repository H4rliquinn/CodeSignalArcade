function messageFromBinaryCode(code) {
    retVal+=getLetterFromBinary(code);
}

function getLetterFromBinary(byte){
    return String.fromCharCode(parseInt(byte,2).toString(10));
}
let c="01001000";
//c="010010000110010101101100011011000110111100100001";
console.log(messageFromBinaryCode(c));