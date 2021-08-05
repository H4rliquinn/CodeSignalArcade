function isSmooth(arr) {
    let middle;
    if (arr.length%2==0){
        middle=arr[parseInt(arr.length/2-1)]+arr[parseInt(arr.length/2)];
    } else {
        middle=arr[parseInt(arr.length/2)];
    }
    return (arr[0]==middle && arr[arr.length-1]==middle);
}

let a=[7,2,2,5,10,7]
console.log(isSmooth(a));
a=[-5,-5,10]
console.log(isSmooth(a));