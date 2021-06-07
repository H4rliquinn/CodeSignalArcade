function digitsProduct(product) {
    if (product<10) return product;
    let total=1;
    for (let y=0;y<4000;y++){
        let pr=y.toString().split("");
        for (let x in pr){
            total*=parseInt(pr[x]);
        }
        if (total==product) return y;
        total=1;
    }
    return -1;
}

let p=600;
console.log(digitsProduct(p));