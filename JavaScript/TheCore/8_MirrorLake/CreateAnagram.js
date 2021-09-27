function createAnagram(s, t) {
    let source=charLib(s);
    let model=charLib(t);
    let changes=0;
    for (let x in model){
        if (model[x]!=source[x]){
            if (source[x]==undefined){
                changes+=model[x];
            }
            else if (source[x]-model[x]>0){
                changes+=source[x]-model[x];
            }
        }

    }
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

let s = "AABAA", t = "BBAAA";
console.log(createAnagram(s,t));
s="OVGHK",t="RPGUC";
console.log(createAnagram(s,t));
