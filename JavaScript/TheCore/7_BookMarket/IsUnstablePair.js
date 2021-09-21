function isUnstablePair(filename1, filename2) {
    return filename1 < filename2 !== filename1.toLowerCase() < filename2.toLowerCase()
}

let f1='aa',f2='AAB';
console.log(isUnstablePair(f1,f2));
f1='A',f2='z';
console.log(isUnstablePair(f1,f2));
