function isSumOfConsecutive2(n) {
    let sumVal=0;
    for (x=1;x<n/2;x++){
        let curSum=x;
        while (currSum<n){
            if (currSum==n) {
                sumVal++;
        }
    }
    return false;
}

