function countBlackCells(n, m) {
    let retVal=0;
    let temp;
    if (n > m) {
        temp = n;
        n = m;
        m = temp;
    }



    function gcd(a, b) {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    }
    return gcd(m, n) * retVal + (gcd(m, n) - 1) * 2;
  }

let n=3,m=4;
console.log(countBlackCells(n,m));
n=3,m=3;
console.log(countBlackCells(n,m));