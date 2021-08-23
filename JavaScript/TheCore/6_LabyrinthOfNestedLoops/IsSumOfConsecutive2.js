function isSumOfConsecutive2(n) {
    let sumVal=0;
    for (x=1;x<n/2;x++){
        let curSum=x,curX=x+1;
        while (curSum<n){
            curSum+=curX;
            if (curSum==n) sumVal++;
            curX++
        }
    }
    return sumVal;
}

let n=9;
console.log(isSumOfConsecutive2(n));
n=8;
console.log(isSumOfConsecutive2(n));