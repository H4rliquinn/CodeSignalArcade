function longestDigitsPrefix(inputString) {
    let retVal= inputString.match(/^\d+/);
    if (retVal){
        return retVal.toString();
    } else {
        return ""
    }
    
}

let is="123aa1";
console.log(longestDigitsPrefix(is));