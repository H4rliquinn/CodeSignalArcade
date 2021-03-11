function differentSymbolsNaive(s) {
    let lib={};
    let count=0;

    s.split();
    for (let x in s){
        if (lib[s[x]]==undefined){
            lib[s[x]]=0;
            count++;
        }
    }
    return count;
}

let s="cabca";
console.log(differentSymbolsNaive(s));
