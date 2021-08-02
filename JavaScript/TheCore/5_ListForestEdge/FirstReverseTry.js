function firstReverseTry(arr) {
    if (arr.length==0) return [];
    let temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
}

let a=[1,2,3,4,5];
console.log(firstReverseTry(a));