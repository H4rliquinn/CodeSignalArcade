function boxBlur(image) {
    let retVal=[];
    for (let y=1;y<image.length-1;y++){
        let rowArray=[];
        for (let x=1;x<image[y].length-1;x++){
            rowArray.push(parseInt((image[y-1][x-1]+image[y-1][x]+image[y-1][x+1]
                +image[y][x-1]+image[y][x]+image[y][x+1]
                +image[y+1][x-1]+image[y+1][x]+image[y+1][x+1])/9));
        }
        retVal.push(rowArray);
    }
    return retVal;
}

let i=[[1,1,1],
        [1,7,1],
        [1,1,1]];

console.log(boxBlur(i));

i=[[7, 4, 0, 1], 
[5, 6, 2, 2], 
[6, 10, 7, 8], 
[1, 4, 2, 0]];

console.log(boxBlur(i));