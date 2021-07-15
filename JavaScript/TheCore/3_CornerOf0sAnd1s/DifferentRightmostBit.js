function differentRightmostBit(n, m) {
    return (
        1 <<
        (n ^ m)
          .toString(2)
          .split("")
          .reverse()
          .join("")
          .indexOf("1")
      );
  }

let n=11;
let m=13;
console.log(differentRightmostBit(n,m));