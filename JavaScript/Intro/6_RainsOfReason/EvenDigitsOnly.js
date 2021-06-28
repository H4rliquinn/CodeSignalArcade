function evenDigitsOnly(n) {
    let arr=n.toString().split("");
    for (let x in arr){
        if (arr[x]%2!=0){
            return false;   
        }
    }
    return true;
}

let num=248622;
console.log(evenDigitsOnly(num));

num=4672;
console.log(evenDigitsOnly(num));