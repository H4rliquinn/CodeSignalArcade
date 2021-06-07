function digitsProduct(product) {
    if (product<10) return product;
    let pr=product.toString().split("");
    let retVal=0;
    for (let x in pr){
        console.log(pr[x]);
        retVal+=parseInt(pr[x]);
    }
    return retVal;
}

let p=12;
console.log(digitsProduct(p));