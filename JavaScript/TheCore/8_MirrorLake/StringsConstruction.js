function stringsConstruction(a, b) {
    let liba=charLib(a);
    let libb=charLib(b);

    let max=libb[a[0]]/liba[a[0]]?libb[a[0]]/liba[a[0]]:0;
    for (let x in a){
            if (libb[a[x]]/liba[a[x]]<max){
                max=libb[a[x]]/liba[a[x]]
            }
    }
    return max;
}
function charLib(s){
    let lib={};
    for (let x in s){
        if (lib[s[x]]!=undefined){
            lib[s[x]]+=1;
        } else {
            lib[s[x]]=1;
        }
    }
    return lib;
}


let a="abc",b="abccba";
console.log(stringsConstruction(a,b));
a="ab",b="abcbcb";
console.log(stringsConstruction(a,b));
a="x",b="y";
console.log(stringsConstruction(a,b));