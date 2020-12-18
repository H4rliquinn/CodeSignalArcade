function makeArrayConsecutive2(statues) {
    for (let x=Math.min(...statues);x<Math.max(...statues);x++){
        console.log(x);
    }
    return statues;
}

let statues=[6,2,3,8]

console.log(makeArrayConsecutive2(statues));

