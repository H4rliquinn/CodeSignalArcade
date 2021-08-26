function comfortableNumbers(l, r) {
    let lib={};
    for (let x=l;x<=r;x++){
        lib[x]=[x-sumNum(x),x+sumNum(x)];
    }

    return lib;
}

function sumNum(n){
    let arr=n.toString().split("");
    return arr.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue));
}

let l=10,r=12;
console.log(comfortableNumbers(l,r));