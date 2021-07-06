function arithmeticExpression(a, b, c) {
    if (a+b==c) return true
    else if (a-b==c) return true
    else if (a*b==c) return true
    else if (a/b==c) return true;
    return false;
}

let a=2;
let b=3;
let c=5;
console.log(arithmeticExpression(a,b,c));