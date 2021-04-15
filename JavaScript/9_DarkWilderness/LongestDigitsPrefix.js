function longestDigitsPrefix(inputString) {
    return inputString.match(/\d+/)[0];
}

let is="123aa1";
console.log(longestDigitsPrefix(is));