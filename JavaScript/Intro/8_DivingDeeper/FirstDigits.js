function firstDigit(inputString) {
    for (let x in inputString){
        if (inputString[x].match(/\d/)){
            return inputString[x];
        }
    }
    return false;
}

let is="var_1__Int";
console.log(firstDigit(is));
is="q2q-q";
console.log(firstDigit(is));
is="0ss"
console.log(firstDigit(is));