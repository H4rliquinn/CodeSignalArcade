function isMAC48Address(inputString) {
    if(inputString.match(/([A-F0-9]{2})(-[A-F0-9]{2}){5}/)){
        return true;
    } else {
        return false;
    }
}

let is ="00-1B-63-84-45-E6";
console.log(isMAC48Address(is));
is="Z1-1B-63-84-45-E6"
console.log(isMAC48Address(is));
is="not a MAC-48 address"
console.log(isMAC48Address(is));