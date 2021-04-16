function isBeautifulString(inputString) {
    let chars=inputString.split("").sort();
    if (chars[0]!="a") return false;
    let currChar=chars[0].charCodeAt(0);
    let currCount=0;
    let lastCount=0;
    // for (let x in chars){

    // }
    return currChar;
}

let s="bbbaacdafe";
console.log(isBeautifulString(s));
s="aabbb";
console.log(isBeautifulString(s));
s="bbc";
console.log(isBeautifulString(s));