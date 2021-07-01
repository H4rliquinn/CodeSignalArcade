function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let sack=0;
    let items=[{v:value1,w:weight1,r:value1/weight1}];
    items.push({v:value2,w:weight2,r:value2/weight2});
    items.sort((a,b)=>{
        return b.r-a.r;
    })

    return sack;
}

let val1=10;
let weight1=5;
let val2=6;
let weight2=4;
let maxW=8;
console.log(knapsackLight(val1,weight1,val2,weight2,maxW));