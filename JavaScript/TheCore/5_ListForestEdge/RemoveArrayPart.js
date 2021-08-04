function removeArrayPart(inputArray, l, r) {
    return [...inputArray.slice(0,l),...inputArray.slice(r+1)];
}

let ia=[2,3,2,3,4,5],l=2,r=4;
console.log(removeArrayPart(ia,l,r));