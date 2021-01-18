function addBorder(picture) {
    let line="*".repeat(picture[0].length+2);
    picture.unshift(line);
    picture.push(line);
    for(x in picture){console.log(picture[x]);}
}

let pic=["abc","def"];

addBorder(pic);
