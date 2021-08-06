function replaceMiddle(arr) {
    let middle;
    if (arr.length%2==0){
        middle=arr[parseInt(arr.length/2-1)]+arr[parseInt(arr.length/2)];
        return [...arr.slice(0,parseInt(arr.length/2-1)),middle,...arr.slice(parseInt(arr.length/2)+1)];
    }
    return arr;
}

let a=[7,2,2,5,10,7]
console.log(replaceMiddle(a));

