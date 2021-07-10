function arrayPacking(a) {
    let retVal="";
    for (let x in a){
        
        let bin=a[x].toString(2);
        while (bin.length<8){
            bin="0"+bin;
        }
        retVal=bin+retVal;
    }
    return parseInt(retVal,2);
}

let a=[24,85,0];
console.log(arrayPacking(a));