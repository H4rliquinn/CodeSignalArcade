function isMAC48Address(inputString) {
    return inputString.match(/([A-F0-9]{2})(-[A-F0-9]{2}){5}/)
}

