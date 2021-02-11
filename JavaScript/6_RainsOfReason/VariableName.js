function variableName(name) {
    if(/^[^0-9\s]\w*$/.test(name)){
        return true;
    } else {
        return false;
    }
}
let nm=" var_1__Int";
console.log(variableName(nm));
nm="qq-q";
console.log(variableName(nm));
nm="2w2";
console.log(variableName(nm));