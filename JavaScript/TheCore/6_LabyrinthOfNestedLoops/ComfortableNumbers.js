function comfortableNumbers(l, r) {
    let lib={};
    let retVal=0;

    for (let x=l;x<=r;x++){
        lib[x]=[x-sumNum(x),x+sumNum(x)];
    }

    for (let x=l;x<r;x++){
        for (let y=x+1;y<=r;y++){
            // console.log(lib,lib[x].includes(y),lib[y].includes(x),x,y);
            if (lib[x][0]<=y && lib[x][1]>=y && lib[y][0]<=x && lib[y][1]>=x) retVal++;
        }
    }

    return retVal;
}

function sumNum(n){
    let arr=n.toString().split("");
    return parseInt(arr.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue)));
}

let l=1,r=9;
console.log(comfortableNumbers(l,r));
