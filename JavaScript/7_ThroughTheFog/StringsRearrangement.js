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
    if (ia.lengh==1) {
        curr.push(ia[0]);
        cache.push(curr);
        return cache;
    }
    
    for (let i=0;i<ia.length;i++){
        curr.push(ia[i]);
        let newArray=[...ia];
        newArray.splice(i,1);
        permutationArray(newArray,curr,cache)
    }
    return cache;
}

function stringsRearrangement(inputArray) {
    //Find Array Permutations
    console.log(permutationArray(inputArray,[],[]));
    
    //Check array
    // for (let x=1;x<inputArray.length;x++){
    //     console.log(oneApart(inputArray[x],inputArray[x-1])); 
    // }
}


let ia=["aba", "bbb", "bab"];
ia=["aba", "bbb"];

console.log(stringsRearrangement(ia));