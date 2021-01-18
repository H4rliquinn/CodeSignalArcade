function alternatingSums(a) {
    let teamOne=0;
    let teamTwo=0;

    for (let x=0;x<a.length;x++){
        if (x%2){
            teamTwo+=a[x];
        } else {
            teamOne+=a[x];
        }
    }
    return [teamOne,teamTwo];
}
