function lateRide(n) {
    let hrs=parseInt(n/60);
    let min=n%60;
    console.log(hrs,min);
    return 1
}

function addTwoDigits(n) {
    let retVal=0;
    let digits=n.toString().split("");
    for (let x in digits){
        retVal+=parseInt(digits[x]);
    }
    return retVal;
}

let n=240;
console.log(lateRide(n));
n=808;
console.log(lateRide(n));