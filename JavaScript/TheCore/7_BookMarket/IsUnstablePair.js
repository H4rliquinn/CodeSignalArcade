function isUnstablePair(filename1, filename2) {
    let flag;
    if (filename1<filename2) flag=true;

    for (let x=0;x<Math.min(filename1.length,filename2.length)+1;x++){
        if ((filename2[x].toLowerCase()<filename1[x].toLowerCase())==flag){
            return true;

            // if (filename1[x]==undefined) return true;
            // if ((filename1[x]<filename2[x])!=(filename1[x].toUpperCase()<filename2[x])){
            //    return false;
            // }
        } else {
            return false;
        }
    }
}

let f1='aa',f2='AAB';
console.log(isUnstablePair(f1,f2));
f1='A',f2='z';
console.log(isUnstablePair(f1,f2));
