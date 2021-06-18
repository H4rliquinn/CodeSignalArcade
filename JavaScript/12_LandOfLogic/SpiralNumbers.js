function spiralNumbers(n) {
    (filler=[]).length=n;
    filler.fill(null);
    (retVal=[]).length=n;
    retVal.fill(filler);

    let len=retVal.length;
    let dir="R";
    let nxt={"R":"D","D":"L","L":"U","U":"R"};
    console.log(nxt[dir]);
    return retVal
}


let n=3;
console.log(spiralNumbers(n));