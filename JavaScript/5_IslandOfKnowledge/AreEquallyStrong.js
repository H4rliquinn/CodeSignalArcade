function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let yourStrong=Math.max(yourLeft,yourRight);
    let yourWeak=Math.min(yourLeft,yourRight);
    let friendStrong=Math.max(friendsLeft,friendsRight);
    let friendWeak=Math.min(friendsLeft,friendsRight);
    
    return (yourStrong==friendStrong && yourWeak==friendWeak);
}

let yl=10,yr=15,fl=15,fr=10;
console.log(areEquallyStrong(yl,yr,fl,fr));
yl=15;
yr=10;
fl=15;
fr=10;
console.log(areEquallyStrong(yl,yr,fl,fr));
yl=15;
yr=10;
fl=15;
fr=9;
console.log(areEquallyStrong(yl,yr,fl,fr));
