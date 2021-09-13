function isTandemRepeat(inputString) {
    let add=inputString.length/2;
    for (let x=0;x<add;x++){
        if (inputString[x]==inputString[x+add]){
            console.log(inputString[x]);
        } else {
            return false;
        }
    }
    return true;
}

let is="tandemtandem";
console.log(isTandemRepeat(is));
is="qqq";
console.log(isTandemRepeat(is));
is="2w2ww";
console.log(isTandemRepeat(is));
