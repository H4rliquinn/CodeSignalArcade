function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let height=upSpeed;
    let days=1;
    while (height<desiredHeight){
        height+=upSpeed-downSpeed;
        days++;
    }
    return days;
}