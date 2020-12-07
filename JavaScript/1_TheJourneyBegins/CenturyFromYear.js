function centuryFromYear(year) {
    let century=Math.floor(year/100)
    if (year-century*100==00){
        return century;
    }
    return century+1;
}