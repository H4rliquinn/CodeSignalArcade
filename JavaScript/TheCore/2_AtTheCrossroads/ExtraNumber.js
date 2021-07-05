function extraNumber(a, b, c) {
    if (a==b){
        return c;
    } else if (a==c){
        return b;
    }
    return a;
}

let a=2;
let b=7;
let c=2;
console.log(extraNumber(a,b,c));