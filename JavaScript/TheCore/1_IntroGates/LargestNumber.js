function largestNumber(n) {
    let retVal="";
    for (let x=0;x<n;x++){
        retVal+="9";
    }
    return parseInt(retVal);
}

let n=2;
console.log(largestNumber(n));