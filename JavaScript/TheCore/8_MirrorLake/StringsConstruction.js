function stringsConstruction(a, b) {
    let lib={};
    for (let x in b){
        if (lib[b[x]]!=undefined){
            lib[b[x]]+=1;
        } else {
            lib[b[x]]=1;
        }
    }
    return lib;
}

let a="abc",b="abccba";
console.log(stringsConstruction(a,b));