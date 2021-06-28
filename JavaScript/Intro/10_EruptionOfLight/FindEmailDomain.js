function findEmailDomain(address) {
    return address.match(/@([A-Za-z0-9_-]+.[A-Za-z0-9_-]+)\b/)[1];
}

let ea="example-indeed@strange-example.com"

console.log(findEmailDomain(ea));