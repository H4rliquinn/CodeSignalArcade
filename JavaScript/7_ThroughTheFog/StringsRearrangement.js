function oneApart(s1,s2){
    //Check if strings are one letter appart
    let count=0;
    for (let x in s1){
        console.log(s1[x],s2[x]);
    }
}

function stringsRearrangement(inputArray) {
    for (let x=1;x<inputArray.length;x++){
        oneApart(inputArray[x],inputArray[x-1])
    }
}


let ia=["aba", "bbb", "bab"];

console.log(stringsRearrangement(ia));