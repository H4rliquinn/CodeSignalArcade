function rangeBitCount(a, b) {
    let cur=a;
    let rangeArray=[cur];
    while (cur<b) {
        cur++;
        rangeArray.push(cur);
    }
    
    retVal=0;
    for (let x in rangeArray){
        let curVal=rangeArray[x].toString(2).split("");
        for (let y in curVal){
            retVal+=parseInt(curVal[y]);
        }
    }
    return retVal;
}

let a=2;
let b=7;
console.log(rangeBitCount(a,b));
