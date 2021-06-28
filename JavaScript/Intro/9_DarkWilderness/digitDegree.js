function digitDegree(n) {
    let degree=0;

    while(n>9){
        let nums=n.toString().split("");
        n=0;
        for (let x in nums){
            n+=parseInt(nums[x]);
        }
        degree++;
    }

    return degree;
}

let num=5;
console.log(digitDegree(num));
num=100;
console.log(digitDegree(num));
num=91;
console.log(digitDegree(num));