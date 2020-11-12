function centuryFromYear(year) {
    let century=year/100-1;
    if (year-century*100==00){
        century+=1
    }
    return century;
}
