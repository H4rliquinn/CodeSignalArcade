function crosswordFormation(words) {
    // let letters=[]
    // for (let word in words){
    //     letters.push(words[word].split(""));
    // }
    let retVal=0;
    for (let i=0;i<words.length;i++){
        for (let j=0;j<words.length;j++){
            for (let k=0;k<words.length;k++){
                for (let l=0;l<words.length;l++){
                    if (i!=j && i!=k && i!=l &&
                        j!=k && j!=l &&
                        k!=l){

                            console.log(i,j,k,l);
                        }
                }
            }
        }
    }
    // return letters;
}




let w=["crossword","square","formation","something"];
console.log(crosswordFormation(w));