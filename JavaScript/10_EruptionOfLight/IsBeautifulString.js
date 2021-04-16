function isBeautifulString(inputString) {
    let chars=inputString.split("").sort();
    if (chars[0]!="a") return false;
    let currChar=chars[0].charCodeAt(0);
    let currCount=0;
    let lastCount=0;
    for (let x in chars){
        console.log(currChar,currCount,lastCount,chars[x].charCodeAt(0));
        if (chars[x].charCodeAt(0)==currChar){
            currCount++;
        } else if (currChar!=97 && currCount>lastCount){
            return false;
        } else {
            currChar=chars[x].charCodeAt(0)
            lastCount=currCount;
            currCount=0;
        }
    }
    return true;
}

let s="bbbaacdafe";
// console.log(isBeautifulString(s));
s="aabbb";
console.log(isBeautifulString(s));
s="bbc";
// console.log(isBeautifulString(s));