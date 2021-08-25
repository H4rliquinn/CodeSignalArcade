function pagesNumberingWithInk(current, numberOfDigits) {
    let digits=current.toString().split("");
    while (numberOfDigits>=digits.length){
        numberOfDigits-=digits.length;
        current++
        digits=current.toString().split("");
    }
    return current-1;
}

let c=1,num=5;
console.log(pagesNumberingWithInk(c,num));
c=21;
num=5;
console.log(pagesNumberingWithInk(c,num));
c=8;
num=4;
console.log(pagesNumberingWithInk(c,num));
