function countSumOfTwoRepresentations2(n, l, r) {
    let retVal=0;
    for (let x=l;x<=r;x++){
        let test=n-x;
        if (test<=r && test>=x) retVal++;
    }
    return retVal;
}

let n=6,l=2,r=4;
console.log(countSumOfTwoRepresentations2(n,l,r));
n=10;l=9;r=11;
console.log(countSumOfTwoRepresentations2(n,l,r));