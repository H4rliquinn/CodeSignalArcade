function alphabeticShift(inputString) {
    let retString="";
    for (let x in inputString){
        // console.log(inputString[x]);
        retString+=inputString[x];
    }
    return retString;
}

let is="crazy";

console.log(alphabeticShift(is));