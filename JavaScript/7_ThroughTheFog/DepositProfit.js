function depositProfit(deposit, rate, threshold) {
    let percent=rate/100+1;
    let current=deposit;
    let yearCount=0;
    while (current<threshold){
        yearCount++;
        current*=percent;
    }
    return yearCount;
}

let dep=100;
let r=20;
let target=170;

console.log(depositProfit(dep,r,target));