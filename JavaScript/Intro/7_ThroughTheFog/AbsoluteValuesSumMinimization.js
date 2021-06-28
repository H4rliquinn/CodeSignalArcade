function absoluteValuesSumMinimization(a) {
    let retVal=[];
    for (let y=0;y<a.length;y++){
        retVal.push(a.reduce((tot,curr)=>{ 
            return tot+Math.abs(a[y]-curr)
        },0));
    }
    return a[retVal.indexOf(Math.min(...retVal))];
}

let arr=[2,4,7];
console.log(absoluteValuesSumMinimization(arr));