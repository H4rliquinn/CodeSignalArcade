function increaseNumberRoundness(n) {
    let num= n.toString().split("").reverse();
    let found=false;
    for (let x in num){
        if (!found){
            if (num[x]!=0) found=true;
        } else {
            if (num[x]=="0"){
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

let n=902200100;
console.log(increaseNumberRoundness(n));
