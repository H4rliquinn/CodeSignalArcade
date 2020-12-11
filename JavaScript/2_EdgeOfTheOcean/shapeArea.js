function shapeArea(n) {
    //Center line is n+n-1
    let centerLine=n+n-1;
    //Each level in triangle decreases by 2 down to 1
    for (let x=centerLine;x>0;x=x-2){
        console.log(x);
    }
    //Top and bottom are identical
    //Return Center + 2 * triangle
}

shapeArea(3);