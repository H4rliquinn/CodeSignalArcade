function metroCard(lastNumberOfDays) {
    let retVal=[];
    if (lastNumberOfDays==31) return [28,30,31];
    if (lastNumberOfDays==28) return [31];
    return [31];
}

let d=30;
console.log(metroCard(d));