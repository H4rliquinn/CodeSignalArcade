function oneApart(s1,s2){
    if (s1==s2) return false;
    let count=0;
    for (let x in s1){
        if (s1[x]!=s2[x]){
            if (count<1){
                count++;
            } else {
                return false;
            }
        }
    }
    return true;
}

function permutationArray(ia,curr,cache){
    if (ia.length==1) {
        curr.push(ia[0]);
        cache.push(curr);
        return cache;
    }
    
    for (let i=0;i<ia.length;i++){
        let newArray=[...ia];
        let newCurr=[...curr];
        newCurr.push(ia[i]);
        newArray.splice(i,1);
        cache=permutationArray(newArray,newCurr,cache)
    }
    return cache;
}

function stringsRearrangement(inputArray) {
    let combinations=permutationArray(inputArray,[],[]);
    let flag=false;
    for (let x=0;x<combinations.length;x++){
        let found=true;
        for (let i=1;i<combinations[x].length;i++){
            if (!oneApart(combinations[x][i],combinations[x][i-1])){
                found=false;
                break;
            } 
        }
        if (found) {
            flag=true;
            break;
        }
    }
    return flag;
}



let ia=["aba", "bbb", "bab"];
ia=["aba","abc","bbc"]
ia=["q","q"]
console.log(stringsRearrangement(ia));