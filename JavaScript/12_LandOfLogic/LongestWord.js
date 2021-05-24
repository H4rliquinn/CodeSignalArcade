function longestWord(text) {
    let largest=0
    let retVal="";
    let words=text.match(/\b[a-zA-Z]+\b/g);
    for (let x in words){
        if (words[x].length>largest){
            largest=words[x].length;
            retVal=words[x];
        }
    }
    return retVal;
}

let text = "Ready, steady, go!";

console.log(longestWord(text));
text = "ab-CDE-fg_hi";
console.log(longestWord(text));