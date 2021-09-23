function isSubstitutionCipher(string1, string2) {
 let lib={};
 for (let x in string1){
     let char=string1[x];
     if (lib[char]==undefined){
         lib[char]=string2[x];
     } else if (lib[char]!=string2[x]){
         return false;
     }
 }
 return true;
}

