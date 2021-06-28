function isIPv4Address(inputString) {
    let nums=inputString.split(".");
    if (nums.length!=4)return false;

    for (let x in nums){
        let test=parseInt(nums[x]);
        if (nums[x].match(/\D/)|| nums[x].match(/^0\d/)) return false;
        if (test>255 || test<0 ||  !Number.isInteger(test)) return false;
    }
    return true;
}

let is="172.16.254.0";
console.log(isIPv4Address(is));
is="172.16.254.09";
console.log(isIPv4Address(is));
is="172.16.254.1a";
console.log(isIPv4Address(is));
// is="172.316.254.0";
// console.log(isIPv4Address(is));
// is="172.e.254.1";
// console.log(isIPv4Address(is));
// is=".16.254.1"
// console.log(isIPv4Address(is));