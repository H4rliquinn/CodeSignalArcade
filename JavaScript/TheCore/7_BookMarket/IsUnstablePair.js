function isUnstablePair(filename1, filename2) {
    for (let x=0;x<Math.min(filename1.length,filename2.length)+1;x++){
        console.log(filename1[x],filename2[x]);
    }
}

let f1='aa',f2='AAB';
isUnstablePair(f1,f2);
// f1="A",f2=z;
// isUnstablePair(f1,f2);
