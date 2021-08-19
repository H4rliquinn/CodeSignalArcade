function isPower(n) {
    for (x=0;x<n;x++){
        for (y=0;y<n;y++){
            if (x**y==n) {
                return true;
            } else if (x**y>n){
                break;
            }
        }
    }
    return false;
}

let n=125;
console.log(isPower(n));
n=72;
console.log(isPower(n));
n=1;
console.log(isPower(n));
