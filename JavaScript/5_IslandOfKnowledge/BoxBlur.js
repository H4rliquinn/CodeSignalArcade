function boxBlur(image) {
    let blurred=[];
    //Find pixels Y axis
    for (let y=1;y<image.length-1;y++){
        //Find pixels X axis
        for (let x=1;x<image[y].length-1;x++){
            //Send pixel values to helper function
            console.log(image[y][x]);
        }
    }
    //write to output
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