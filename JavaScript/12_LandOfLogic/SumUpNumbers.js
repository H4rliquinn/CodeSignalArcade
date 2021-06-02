function sumUpNumbers(inputString) {
    let items=inputString.match(/\d+/g);
    console.log(items);
    let total=0;
    if (items!=null){
        total=items.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue));
    } else return 0;
    return parseInt(total);
}

// let s="2 apples, 12 oranges";
// console.log(sumUpNumbers(s));
// s="No valid items needed 20 56 200";
// console.log(sumUpNumbers(s));
// s="No numbers";
// console.log(sumUpNumbers(s));
s="123450";
console.log(sumUpNumbers(s));