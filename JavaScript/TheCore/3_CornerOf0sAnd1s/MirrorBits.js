function mirrorBits(a) {
    let org=a.toString(2).split("");
    let len=org.length;
    let retVal="";

    console.log(org);
    for (let x=0;x<len;x++){
        retVal+=org.pop();
    }
    return parseInt(retVal,2);
}

let a=97;
console.log(mirrorBits(a));