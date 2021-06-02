function sumUpNumbers(inputString) {
    let items=inputString.split(",");
    let total=0;
    for (let x in items){
        total+=parseInt(items[x].match(/\d+/));
    }
    
    return total;
}

let s="2 apples, 12 oranges";
console.log(sumUpNumbers(s));