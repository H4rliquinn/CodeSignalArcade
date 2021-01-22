function palindromeRearranging(inputString) {
    let lib={};
    for (let x in inputString){
        if (lib[inputString[x]]==1){
            lib[inputString[x]]=0;
        } else {//if (lib[inputString[x]]==0 || lib[inputString[x]]==undefined)
            lib[inputString[x]]=1;
        }
    }
    return lib;
}

let i="aabb";
console.log(palindromeRearranging(i));
i="acabb";
console.log(palindromeRearranging(i));
i="aabbco";
console.log(palindromeRearranging(i));