function constructSquare(s) {
    let sa=s.split("");
    sa=permutationArray(sa,[],[])
    return sa;
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

let s="ab";
console.log(constructSquare(s));
// let a=["a","b","c"];
// let curr,cache;
// console.log();