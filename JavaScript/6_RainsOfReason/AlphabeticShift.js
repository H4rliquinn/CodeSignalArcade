function alphabeticShift(inputString) {
    let retString="";
    for (let x in inputString){
        if (inputString[x].charCodeAt()+1==123){
            retString+='a';
        } else {
            retString+=String.fromCharCode(inputString[x].charCodeAt()+1);
        }
    }
    return retString;
}

let is="crazy";

console.log(alphabeticShift(is));