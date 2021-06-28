function digitsProduct(product) {
    let total=1;
    for (let y=1;y<4000;y++){
        let pr=y.toString().split("");
        for (let x in pr){
            total*=parseInt(pr[x]);
        }
        if (total==product) return y;
        total=1;
    }
    return -1;
}

let p=5;
console.log(digitsProduct(p));