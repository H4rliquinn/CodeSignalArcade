function appleBoxes(k) {
    let yellow=0,red=0;
    for (let x=1;x<=k;x++){
        if (x%2==0){
            red+=x*x;
        } else {
            yellow+=x*x;
        }
        console.log(red,yellow);
    }
    return red-yellow;
}

let k=5;
console.log(appleBoxes(k));