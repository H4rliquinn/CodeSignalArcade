function weakNumbers(n) {
    let divs={}
    for (let x=1;x<=n;x++){
        divs[x]=findDevisors(x)
    }
    return divs;
}

function findDevisors(n){
    let retVal=0;;
    for (let x=1;x<=n;x++){
        if (n%x==0){
            retVal++;
        }
    }
    return retVal;
}

let a=9;
console.log(weakNumbers(a));