function almostIncreasingSequence(sequence) {
    let highest=Number.NEGATIVE_INFINITY;
    let strike=0;
    for(let x=0;x<sequence.length;x++){
      if (sequence[x]>=highest){
        highest=sequence[x];
      } else  {
        strike++;
      }
      if (strike>1){
        return false;
      }
    }
    return true;
}

let sec=[1,3,2,1];
let sec2=[1,3,2];

console.log(almostIncreasingSequence(sec));
console.log();
console.log(almostIncreasingSequence(sec2));
