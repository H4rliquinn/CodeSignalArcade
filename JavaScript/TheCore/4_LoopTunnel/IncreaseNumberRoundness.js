function increaseNumberRoundness(n) {
    let num= n.toString().split("").reverse();
    let found=false;
    for (let x in num){
        if (!found && num[x]!=0) found=true;
        if (found && num[x]=="0") return true;
    } 
    return false;
}

let n=902200100;
console.log(increaseNumberRoundness(n));
n=1022220;
console.log(increaseNumberRoundness(n));
