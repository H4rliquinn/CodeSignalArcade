function makeArrayConsecutive2(statues) {
    let missing=[];
    for (let x=Math.min(...statues)+1;x<Math.max(...statues);x++){
        if (!statues.includes(x)){
            missing.push(x);
        }
    }
    return missing.length;
}

let statues=[6,2,3,8]

console.log(makeArrayConsecutive2(statues));

