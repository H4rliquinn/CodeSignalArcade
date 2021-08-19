function isPower(n) {
    for (x=1;x<n;x++){
        for (y=1;y<n;y++){
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
