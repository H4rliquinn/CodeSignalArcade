function arrayChange(inputArray) {
    let current;
    let moves=0;

    for (let x=0;x<inputArray.length;x++){
        if (x==0){
            current=inputArray[x];
        } else {
            if (inputArray[x]<=current){
                console.log("start",current,inputArray[x],current-inputArray[x]+2);
                moves+=current-inputArray[x]+1;
                current+=1;
            } else {
                current=inputArray[x];
            }
        }
    }
    return moves;
}

let a=[1,1,1];

console.log(arrayChange(a));