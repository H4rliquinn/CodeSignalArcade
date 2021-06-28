function shapeArea(n) {
    //Center line is n+n-1
    let centerLine=n+n-1;
    //Each level in triangle decreases by 2 down to 1
    let triangle=0;
    for (let x=centerLine-2;x>0;x=x-2){
        triangle=triangle+x;
    }
    //Top and bottom are identical
    //Return Center + 2 * triangle
    return centerLine+2*triangle;
}
console.log(shapeArea(3));
console.log(shapeArea(4));
console.log(shapeArea(10));