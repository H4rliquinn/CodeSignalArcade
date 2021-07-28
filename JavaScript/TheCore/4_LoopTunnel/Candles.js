function candles(candlesNumber, makeNew) {
    let leftovers=0;
    let retVal=0;
    while ((candlesNumber>0 || leftovers>=makeNew)){
        if (leftovers>=makeNew){
            candlesNumber+=parseInt(leftovers/makeNew);
            leftovers=leftovers%makeNew;       
        }
        retVal+=candlesNumber;
        leftovers+=candlesNumber;
        candlesNumber=0;
    }
    return retVal;
}

let cn=5;
let mn=2;
console.log(candles(cn,mn));