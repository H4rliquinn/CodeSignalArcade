function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let sack=0;
    let curWeight=maxW;
    let items=[{v:value1,w:weight1,r:value1/weight1}];
    items.push({v:value2,w:weight2,r:value2/weight2});
    items.sort((a,b)=>{
        return b.v-a.v;
    })
    for (let x in items){
        if (items[x].w<=curWeight){
            sack+=items[x].v;
            curWeight-=items[x].w;
        }
    }
    return sack;
}

let val1=10;
let weight1=5;
let val2=6;
let weight2=4;
let maxW=8;
console.log(knapsackLight(val1,weight1,val2,weight2,maxW));
maxW=9;
console.log(knapsackLight(val1,weight1,val2,weight2,maxW));
val1=5;
weight1=3;
val2=7;
maxW=6;
console.log(knapsackLight(val1,weight1,val2,weight2,maxW));
val1=10;
weight1=4;
val2=11;
weight2=5;
maxW=6;
console.log(knapsackLight(val1,weight1,val2,weight2,maxW));