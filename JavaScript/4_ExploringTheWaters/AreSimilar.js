function areSimilar(a, b) {
    let library={};
    for (let x in a){
        if (a[x] in library){
            library[a[x]]++;
        } else {
            library[a[x]]=1;
        }
    }
    for (let y in b){
        if (library[b[y]]==undefined || library[b[y]]==0){
            return false;
        } else {
            library[b[y]]--;
        }
    }
    return true;
}

let a=[1,2,3];
let b=[1,2,3];
console.log(areSimilar(a,b));
a=[1,2,3];
b=[2,1,3];
console.log(areSimilar(a,b));
a=[1,2,2];
b=[1,2,1];
console.log(areSimilar(a,b));
