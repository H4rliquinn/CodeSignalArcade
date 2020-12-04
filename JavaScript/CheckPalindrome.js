function checkPalindrome(inputString) {
    for (x=0;x<parseInt(inputString.length/2);x++){
        if (inputString[x]!==inputString[inputString.length-x-1]){
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome("The String"));
console.log();
console.log(checkPalindrome("Odd The String"));
console.log();
console.log(checkPalindrome("abcdeedcba"));


