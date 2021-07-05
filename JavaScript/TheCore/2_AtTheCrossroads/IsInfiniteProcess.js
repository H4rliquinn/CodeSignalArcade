function isInfiniteProcess(a, b) {
    if ((b-a)%2!=0) {
        return true;
    }
    if (b<a) {
        return true;
    }  
    return false;
}

let a=2;
let b=6;
console.log(isInfiniteProcess(a,b));
a=2;
b=3;
console.log(isInfiniteProcess(a,b));
