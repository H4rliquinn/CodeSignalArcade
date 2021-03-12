function arrayMaxConsecutiveSum(inputArray, k) {
    let sum=0;
    for (let x=0;x<inputArray.length;x++){
        sum+=inputArray[x];
        if (x>k-1){
            sum-=inputArray[x-k];
        }
    }
    return sum;
}

let ia=[2,3,5,1,6];
let k=2;

console.log(arrayMaxConsecutiveSum(ia,k));