function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for (let x=0;x<inputArray.length;x++){
        if (inputArray[x]==elemToReplace){
            inputArray[x]=substitutionElem;
        }
    }
    return inputArray;
}

let a=[1,2,1]
let etr=1,se=3;
console.log(arrayReplace(a,etr,se));