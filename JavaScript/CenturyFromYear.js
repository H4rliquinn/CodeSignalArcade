function centuryFromYear(year) {
    let century=Math.floor(year/100)
    if (year-century*100==00){
        return century;
    }
    return century+1;
}

console.log(centuryFromYear(1901));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1432));