function constructSquare(s) {
    let sa=s.split("");
    let sap=permutationArray(sa,[],[]);

    for (let x=31623;x>0;x--){
        let pos=x*x;
        if (pos.toString().split("").length==sa.length) {
            if (checkMatch(pos.toString().split(""),sap)){
                return true;
            }
        }
    }
    return sap;
}

function checkMatch(target,perms){
    let lib={};
    for (let x=0;x<perms.length;x++){
        
        console.log(target,perms[x]);
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

let s="ab";
console.log(constructSquare(s));
// let a=["a","b","c"];
// let curr,cache;
// console.log();