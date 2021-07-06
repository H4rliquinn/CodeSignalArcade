function tennisSet(score1, score2) {
    let max=Math.max(score1,score2);
    let min=Math.min(score1,score2);

    if (max==6 && min<5) return true;
    else if (max>6 && max==min+2) return true;
    return false;
}

let s1=3;
let s2=6;
console.log(tennisSet(s1,s2));
s1=8;
s2=5;
console.log(tennisSet(s1,s2));
s1=6;
s2=5;
console.log(tennisSet(s1,s2));