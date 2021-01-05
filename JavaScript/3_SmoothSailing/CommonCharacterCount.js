function commonCharacterCount(s1, s2) {
    let lib={};
    let common=0;
    for (let chr in s1){
        if (lib[s1[chr]] !== undefined){
            lib[s1[chr]] += 1;
        } else {
            lib[s1[chr]] = 1;
        }
    }
    
    for (let chr in s2){
        if (lib[s2[chr]] !== undefined && lib[s2[chr]]>1){
            common+=1;
            lib[s2[chr]]-=1;
        }
    }
    return common;
}

let s1 = "aabcc"
let s2 = "adcaa"

commonCharacterCount(s1,s2);