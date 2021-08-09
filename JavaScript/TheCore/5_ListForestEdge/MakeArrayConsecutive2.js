function makeArrayConsecutive2(statues) {
    let min=Math.min(...statues);
    let max=Math.max(...statues);
    let retVal=0;
    for (let x=min+1;x<max;x++){
        if (!statues.includes(x)){
            retVal++;
        }
    }
    return retVal;
}

let a=[6,2,3,8];
console.log(makeArrayConsecutive2(a));