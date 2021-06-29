function circleOfNumbers(n, firstNumber) {
    let pos=n/2+firstNumber;
    if (pos>n-1){
        pos-=n;
    }
    return pos;
}

let n=10;
let fn=2;
console.log(circleOfNumbers(n,fn));

n=12;
fn=7;
console.log(circleOfNumbers(n,fn));