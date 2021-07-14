function swapAdjacentBits(n) {

    return parseInt(
        ((n.toString(2).length % 2 ? "0" : "") + n.toString(2))
          .match(/\d{2}/g).map(x =>
            x.split("").reverse().join("")
          ).join("")
          ,
        2
      );
  }

  let n=13;
  console.log(swapAdjacentBits(n));