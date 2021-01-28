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
    return max;
}

let ia=[2,4,1,0];
console.log(arrayMaximalAdjacentDifference(ia));
is=[-5,3,6,9,-1];
console.log(arrayMaximalAdjacentDifference(ia));
