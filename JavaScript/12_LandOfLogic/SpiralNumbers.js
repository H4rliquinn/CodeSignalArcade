function spiralNumbers(n) {
    (filler=[]).length=n;
    filler.fill(null);
    (retVal=[]).length=n;
    retVal.fill(filler);
    return retVal
}

let n=3;
console.log(spiralNumbers(n));