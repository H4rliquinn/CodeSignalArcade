function variableName(name) {
    if(/^\D\w*/){
        return true;
    } else {
        return false;
    }
}

let nm="var_1__Int";
variableName(nm);
nm="qq-q";
variableName(nm);
nm="2w2";
variableName(nm);