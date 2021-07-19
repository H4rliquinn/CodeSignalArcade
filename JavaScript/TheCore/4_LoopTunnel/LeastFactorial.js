function leastFactorial(n) {
    let curr=1;
    for (let x=1;x<120;x++){
        curr*=x;
        if (curr>=n) return curr;
    }
}

let n=17;
console.log(leastFactorial(n));