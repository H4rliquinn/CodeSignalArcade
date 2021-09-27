function createAnagram(s, t) {
    let source=charLib(s);
    let model=charLib(t);
    let changes=0;
    for (let x in model){

            if (source[x]==undefined){
                console.log("UN",x,model[x]);
                changes+=model[x];
            }
            else if (model[x]-source[x]>0){
                
                console.log("NO",x,model[x]-source[x]);
                changes+=model[x]-source[x];
            }


    }
    // console.log(source,model);
    return changes;
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

let s = "KJDMDLEEKALIJB", t = "AFDJGDCGHMIGHB";
console.log(createAnagram(s,t));
// s="OVGHK",t="RPGUC";
// console.log(createAnagram(s,t));
