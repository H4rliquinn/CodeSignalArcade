function validTime(time) {
    let nums=time.match(/\d\d/g);
    return nums;
}

let t="13:58";
console.log(validTime(t));