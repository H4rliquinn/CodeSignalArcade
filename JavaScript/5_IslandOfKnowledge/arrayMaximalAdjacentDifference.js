function arrayMaximalAdjacentDifference(inputArray) {
    let last,current;
    let max=-1;
    for (let x in inputArray){
        if (last!=undefined){
            current=Math.abs(last-inputArray[x]);
            if (max<current) max=current;
        }
        last=inputArray[x]
    }
}

