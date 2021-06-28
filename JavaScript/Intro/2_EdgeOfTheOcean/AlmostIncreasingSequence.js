function almostIncreasingSequence(sequence) {
    let highest=Number.NEGATIVE_INFINITY;
    let rollback=Number.NEGATIVE_INFINITY;
    let strike=0;
    for(let x=0;x<sequence.length;x++){
      if (sequence[x]>highest){
        rollback=highest;
        highest=sequence[x];
      } else if (sequence[x]>rollback) {
        highest=sequence[x];
        strike++;
      } else {
        return false;
      }
      if (strike>1){
        strike++;
      }
    }
    return true;
}

let sec=[1,3,2,1];
let sec2=[1,3,2];
let sec3=[1, 2, 1, 2];
let sec4=[3, 6, 5, 8, 10, 20, 15];


console.log(almostIncreasingSequence(sec));
console.log();
console.log(almostIncreasingSequence(sec2));
console.log();
console.log(almostIncreasingSequence(sec3));
console.log();
console.log(almostIncreasingSequence(sec4));
