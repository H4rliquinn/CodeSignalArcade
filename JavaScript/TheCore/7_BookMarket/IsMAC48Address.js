function isMAC48Address(inputString) {
    if(inputString.match(/^([A-F0-9]{2})(-[A-F0-9]{2}){5}$/)){
        return true;
    } else {
        return false;
    }
}