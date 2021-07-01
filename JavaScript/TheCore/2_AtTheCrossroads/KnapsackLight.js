function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let item1={v:value1,w:weight1,r:value1/weight1};
    let item2={v:value2,w:weight2,r:value2/weight2};


    return [item1,item2];
}

let val1=10;
let weight1=5;
let val2=6;
let weight2=4;
let maxW=8;
console.log(knapsackLight(val1,weight1,val2,weight2,maxW));