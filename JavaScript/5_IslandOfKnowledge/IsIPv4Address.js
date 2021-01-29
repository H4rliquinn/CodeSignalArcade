function isIPv4Address(inputString) {
    let nums=inputString.split(".");
    return nums;
}

let is="172.16.254.1";
console.log(isIPv4Address(is));