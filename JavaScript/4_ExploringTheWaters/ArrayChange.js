function arrayChange(inputArray) {
    let current=Number.NEGATIVE_INFINITY;
    let moves=0;

    for (let x in inputArray){
        if (inputArray[x]<=current){
            moves+=current-(inputArray[x]+1);
            current=moves++;
        }
    }
    return moves;
}

