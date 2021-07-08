function killKthBit(n, k) {
    let mask=1<<k-1;
    // console.log(mask.toString(2),~mask.toString(2));
    return n&=~(1<<k-1);
  }

  let n=37;
  let k=3;
  console.log(killKthBit(n,k));