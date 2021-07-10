function rangeBitCount(a, b) {
    let cur=a;
    let rangeArray=[cur];
    while (cur<b) {
        cur++;
        rangeArray.push(cur);
    }
    
    return rangeArray;
}

let a=2;
let b=7;
console.log(rangeBitCount(a,b));
