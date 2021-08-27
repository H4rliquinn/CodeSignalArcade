function weakNumbers(n) {
    let divs=findDevisors(n)
    return divs;
}

function findDevisors(n){
    let retArr=[];
    for (let x=1;x<=n;x++){
        if (n%x==0){
            retArr.push(x)
        }
    }
    return retArr;
}

let a=8;
console.log(weakNumbers(a));