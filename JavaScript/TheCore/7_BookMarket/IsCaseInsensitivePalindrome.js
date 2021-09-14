function isCaseInsensitivePalindrome(inputString) {
    let lcInputString=inputString.toLowerCase();
        for (x=0;x<parseInt(lcInputString.length/2);x++){
            if (lcInputString[x]!==lcInputString[lcInputString.length-x-1]){
                return false;
            }
        }
        return true;
}

let is="AaBaa";
console.log(isCaseInsensitivePalindrome(is));