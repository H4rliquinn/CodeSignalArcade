function extractEachKth(inputArray, k) {
    let currIndex=parseInt(inputArray.length/k)*k;
    
    while (currIndex>0){
        inputArray.splice(currIndex-1,1);
        currIndex-=k;
    }
    
    return inputArray;
}

let ia=[1,2,3,4,5,6,7,8,9,10];
let k=3;

console.log(extractEachKth(ia,k));