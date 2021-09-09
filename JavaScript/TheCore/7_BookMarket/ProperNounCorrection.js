function properNounCorrection(noun) {
    return noun[0].toUpperCase()+noun.substring(1).toLowerCase();
}

let w="pARis";
console.log(properNounCorrection(w));