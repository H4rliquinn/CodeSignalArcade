function deleteDigit(n) {
    n+="";
    let max=-1;
    for (let x=0;x<n.length; x++){
        max=Math.max(max,n.slice(0,x)+n.slice(x+1));
    }
    return max;
}

let num=152;
console.log(deleteDigit(num));