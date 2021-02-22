function absoluteValuesSumMinimization(a) {

    let daMin=a.reduce((tot,curr)=>{ 
        console.log(a[0],curr);
        return tot+Math.abs(a[0]-curr)
    },0);
    console.log(daMin);
}

let arr=[2,4,7];
console.log(absoluteValuesSumMinimization(arr));