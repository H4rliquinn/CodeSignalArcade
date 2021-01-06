function isLucky(n) { 
    let digits=n.toString().split('');
    let left=0;
    let right=0;
    for (let x=0;x<digits.length/2;x++){
        left+=parseInt(digits[x]);
        right+=parseInt(digits[digits.length-x-1]);
    }
    console.log(left);
    console.log(right);
    return true;
}

let n1=1230;
let n2=23917;

console.log(isLucky(n1));
console.log(isLucky(n2));