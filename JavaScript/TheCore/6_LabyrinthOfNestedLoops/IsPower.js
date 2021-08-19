function isPower(n) {
    let test;
    for (x=1;x*x<n;x++){
        test=x*x;
    }
    return (test==n);
}

