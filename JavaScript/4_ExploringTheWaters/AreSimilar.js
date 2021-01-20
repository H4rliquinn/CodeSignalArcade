function areSimilar(a, b) {
    let possSwitch=-1;
    let switched=false;
    
    for (let x in a){
        if (a[x] !== b[x]){
            if (possSwitch==-1){
                possSwitch=x;
            } else if (switched==false) {
                if (a[x]==b[possSwitch] && a[possSwitch]==b[x]){
                    switched=true;
                    possSwitch=-1;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    if (possSwitch==-1){
        return true;
    } else {
        return false
    }
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
