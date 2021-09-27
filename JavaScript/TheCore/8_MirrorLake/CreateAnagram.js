function createAnagram(s, t) {
    
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
