function absoluteValuesSumMinimization(a) {
    let retVal=[];
    for (let y=0;y<a.length;y++){
        retVal.push(a.reduce((tot,curr)=>{ 
            console.log(a[y],curr);
            return tot+Math.abs(a[y]-curr)
        },0));
    }

    return retVal
}

let arr=[2,4,7];
console.log(absoluteValuesSumMinimization(arr));