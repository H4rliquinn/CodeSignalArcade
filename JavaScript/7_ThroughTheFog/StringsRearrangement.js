function oneApart(s1,s2){
    //Check if strings are one letter appart
    let count=0;
    for (let x in s1){
        // console.log(s1[x],s2[x]);
        if (s1[x]!=s2[x]){
            if (count<2){
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
        // console.log("1 Left",ia,curr,cache);
        return cache;
    }
    
    for (let i=0;i<ia.length;i++){
        // console.log("Loop",ia,curr,cache);
        let newArray=[...ia];
        let newCurr=[...curr];
        newCurr.push(ia[i]);
        newArray.splice(i,1);
        // console.log("After Loop",ia,newArray,newCurr,cache);
        cache=permutationArray(newArray,newCurr,cache)
    }
    return cache;
}

function stringsRearrangement(inputArray) {
    //Find Array Permutations
    let combinations=permutationArray(inputArray,[],[]);
    
    // Check array
    let flag=false;
    for (let x=0;x<combinations.length;x++){
        let found=true;
        for (let i=1;conbinations[x].length;i++){
            if (!oneApart(inputArray[x],inputArray[x-1])){
                break;
            } 
        }
    }
}


let ia=["aba", "bbb", "bab"];
// ia=["1", "2"];

console.log(stringsRearrangement(ia));