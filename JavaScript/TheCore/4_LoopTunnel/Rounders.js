function rounders(n) {
    let num= n.toString().split("").reverse();
    for (let x=0;x<num.length-1;x++){
        console.log(num[x]);
    } 
}

let n=1234;
console.log(rounders(n));
n=1445;
console.log(rounders(n));