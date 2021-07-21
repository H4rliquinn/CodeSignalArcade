function magicalWell(a, b, n) {
    let retVal=0;
    for (let x=0;x<n;x++){
        retVal+=a*b;
        a++;
        b++;
    }
    return retVal;
}

let a=1,b=2,n=2;
console.log(magicalWell(a,b,n));