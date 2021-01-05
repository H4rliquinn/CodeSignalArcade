function commonCharacterCount(s1, s2) {
    let lib={};
    for (let chr in s1){
        if (lib[s1[chr]] !== undefined){
            lib[s1[chr]] += 1;
        } else {
            lib[s1[chr]] = 1;
        }
    }
    console.log(lib);
}

let s1 = "aabcc"
let s2 = "adcaa"

commonCharacterCount(s1,s2);