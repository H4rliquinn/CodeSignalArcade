function stringsConstruction(a, b) {
    let liba=charLib(a);
    let libb=charLib(b);

    // let max=0;
    // for (let x in a){
    //     if (lib[a[x]]<max){
    //         max=lib[a[x]]
    //     }
    // }
    return [liba,libb];
}
function charLib(s){
    let lib={};
    for (let x in s){
        if (lib[s[x]]!=undefined){
            lib[s[x]]+=1;
        } else {
            lib[b[x]]=1;
        }
    }
    return lib;
}


let a="abc",b="abccba";
console.log(stringsConstruction(a,b));