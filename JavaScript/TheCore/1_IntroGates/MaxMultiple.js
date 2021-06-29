function maxMultiple(divisor, bound) {
    for (let x=bound;x>0;x--){
        if (x%divisor==0) return x;
    }
}

let div=3;
let bound=10;
console.log(maxMultiple(div,bound));