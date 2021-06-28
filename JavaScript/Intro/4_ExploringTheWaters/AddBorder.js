function addBorder(picture) {
    let line="*".repeat(picture[0].length+2);
    for(x in picture){picture[x]="*"+picture[x]+"*";}
    picture.unshift(line);
    picture.push(line);
    return picture
}

// for(x in picture){console.log(picture[x]);}
let pic=["abc","def"];

addBorder(pic);
