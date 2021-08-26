function comfortableNumbers(l, r) {
    let lib={};
    let retVal=0;

    for (let x=l;x<=r;x++){
        lib[x]=[x-sumNum(x),x+sumNum(x)];
    }

    for (let x=l;x<r;x++){
        for (let y=x+1;y<=r;y++){
            console.log(x,y);
        }
    }

    return lib;
}

function sumNum(n){
    let arr=n.toString().split("");
    return arr.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue));
}

let l=10,r=12;
console.log(comfortableNumbers(l,r));