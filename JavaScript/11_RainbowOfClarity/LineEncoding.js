function lineEncoding(s) {
    let cur="";
    let cnt=0;
    let retVal="";
    for (let x in s){
        if (cur=="") cur=s[x];
        if (cur==s[x]){
            cnt++;
        } else {
            if (cnt>1){
                retVal+=cnt+cur;
            } else {
                retVal+=cur;
            }
            cnt=1;
            cur=s[x];
        }
    }
    if (cnt>1){
        retVal+=cnt+cur;
    } else {
        retVal+=cur;
    }
    return retVal;
}

let s = "aabbbc";
console.log(lineEncoding(s));