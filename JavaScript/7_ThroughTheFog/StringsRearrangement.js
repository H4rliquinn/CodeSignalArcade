function oneApart(s1,s2){
    //Check if strings are one letter appart
    let count=0;
    for (let x in s1){
        // console.log(s1[x],s2[x]);
        if (s1[x]!=s2[x]){
            if (count<2){
                count++;
            } else {
                return false;
            }
        }
    }
    return true;
}

function stringsRearrangement(inputArray) {
    for (let x=1;x<inputArray.length;x++){
        console.log(oneApart(inputArray[x],inputArray[x-1]));
        
    }
}


let ia=["aba", "bbb", "bab"];

console.log(stringsRearrangement(ia));