function palindromeRearranging(inputString) {
    let lib={};
    let maxCenter=inputString.length%2==0?0:1;
    let center=0;

    for (let x in inputString){
        if (lib[inputString[x]]==1){
            lib[inputString[x]]=0;
        } else {//if (lib[inputString[x]]==0 || lib[inputString[x]]==undefined)
            lib[inputString[x]]=1;
        }
    }

    for (let y in lib){
        if (lib[y]>0){
            if (center<maxCenter){
                center++;
            } else if (center>=maxCenter){
                return false;
            }
        }
    }
    return true;
}

let i="aabb";
console.log(palindromeRearranging(i));
i="acbb";
console.log(palindromeRearranging(i));
i="acabb";
console.log(palindromeRearranging(i));
i="aabbco";
console.log(palindromeRearranging(i));