function squareDigitsSequence(a0) {
    let lib={};
    let counter=0;
    let currentNum=a0;

    let digits=currentNum.toString().split("");
    currentNum=0;
    for (let x in digits){
        currentNum+=parseInt(digits[x])**2;
    }
    // while (lib[currentNum]==undefined){
    //     lib[currentNum]=1;

    // }
    return currentNum;
}

let n=16;
console.log(squareDigitsSequence(n));