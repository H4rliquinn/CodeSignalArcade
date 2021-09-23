function isSubstitutionCipher(string1, string2) {
    let lib1={},lib2={};
    for (let x in string1){
        let char1=string1[x];
        let char2=string2[x];
        if (lib1[char1]==undefined){
            lib1[char1]=char2;
            
        }
        if (lib2[char2]==undefined){
            lib2[char2]=char1;
        }
        if (lib1[char1]!=char2||lib2[char2]!=char1){
            return false;
        }
    }
    return true;
}

let s1="aacb",s2="aabc";
console.log(isSubstitutionCipher(s1,s2));
s2="acbb";
console.log(isSubstitutionCipher(s1,s2));
s1="aaxyaa";
s2="aazzaa";
console.log(isSubstitutionCipher(s1,s2));