function rounders(n) {
    let num= n.toString().split("").reverse();
    let retVal=[];
    let add=0;
    for (let x=0;x<num.length-1;x++){
       num[x]= parseInt(num[x])+add;
        if (num[x]>=5){
            add=1;
        } else {
            add=0;
        }
        retVal.push("0");
    } 
    retVal.push((parseInt(num.pop())+add).toString())
    retVal.reverse();
    return parseInt(retVal.join(""));
}

let n=1234;
console.log(rounders(n));
n=1445;
console.log(rounders(n));