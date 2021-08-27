function weakNumbers(n) {
    let divs={};
    let maxWeakness=[0,0];
    for (let x=1;x<=n;x++){
        divs[x]=findDevisors(x)
    }
    for (let x=1;x<=n;x++){
        let weakness=0;
        for (let y=1;y<x;y++){
            if (divs[y]>divs[x]) weakness++
        }
        if (maxWeakness[0]<weakness){
            maxWeakness[0]=weakness;
            maxWeakness[1]=1;
        } else if (maxWeakness[0]==weakness){
            maxWeakness[1]++;
        }
    }
    return maxWeakness;
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