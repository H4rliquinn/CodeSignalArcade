function addTwoDigits(n) {
    let retVal=0;
    let digits=n.toString().split("");
    for (let x in digits){
        retVal+=parseInt(digits[x]);
    }
    return retVal;
}

let n=29;
console.log(addTwoDigits(n));