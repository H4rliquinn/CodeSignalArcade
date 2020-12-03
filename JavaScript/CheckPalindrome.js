function checkPalindrome(inputString) {
    for (x=0;x<parseInt(inputString.length/2);x++){
        console.log(inputString[x]);
        console.log(inputString[inputString.length-x-1]);
    }
}

checkPalindrome("The String");
console.log();
checkPalindrome("Odd The String");
console.log();
checkPalindrome("abcdeedcba");

