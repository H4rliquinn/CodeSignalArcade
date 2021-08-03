function concatenateArrays(a, b) {
    return [...a,...b];
}

let a=[2,2,1],b=[10,11];
console.log(concatenateArrays(a,b));