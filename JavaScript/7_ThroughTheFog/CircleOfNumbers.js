function circleOfNumbers(n, firstNumber) {
    let mid=n/2;
    return (mid+firstNumber)%n;
}

let n=10;
let firstNum=2;

console.log(circleOfNumbers(n,firstNum));