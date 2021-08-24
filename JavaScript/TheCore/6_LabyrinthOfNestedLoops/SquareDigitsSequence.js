function squareDigitsSequence(a0) {
    let lib={};
    let counter=1;
    let currentNum=a0;

    while (lib[currentNum]==undefined){
        lib[currentNum]=1;
        let digits=currentNum.toString().split("");
        currentNum=0;
        for (let x in digits){
            currentNum+=parseInt(digits[x])**2;
        }
        counter++;
    }
    return counter;
}

let n=16;
console.log(squareDigitsSequence(n));
n=103;
console.log(squareDigitsSequence(n));