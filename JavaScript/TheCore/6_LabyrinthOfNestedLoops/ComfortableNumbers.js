function comfortableNumbers(l, r) {
    return sumNum(l);
}

function sumNum(n){
    let arr=n.toString().split("");
    return arr.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue));
}

let l=10,r=12;
console.log(comfortableNumbers(l,r));