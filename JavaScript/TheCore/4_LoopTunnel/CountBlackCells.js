function countBlackCells(n, m) {

    

    function gcd(a, b) {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    }
    return gcd(m, n) * s + (gcd(m, n) - 1) * 2;
  }

let n=3,m=4;
console.log(countBlackCells(n,m));