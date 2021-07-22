function additionWithoutCarrying(param1, param2) {
    let retVal=[];
    let p1=param1.toString().split("").reverse();
    let p2=param2.toString().split("").reverse();
    for (let x=0;x<Math.max(p1.length,p2.length);x++){
        
        
    }

}

function oneDigit(a,b){
    let c=a+b;
    if (c>9){
        return c-10;
    } else return c;
}

let p1=456,p2=1734;
console.log(additionWithoutCarrying(p1,p2));