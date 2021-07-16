function equalPairOfBits(n, m) {

    return  ~(n^m) & (-~(n^m));
  }

  let n=10;
  let m=11;
  console.log(equalPairOfBits(n,m));