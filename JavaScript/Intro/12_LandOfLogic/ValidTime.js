function validTime(time) {
    let nums=time.match(/\d\d/g);
    if (parseInt(nums[0])>=0 
    && parseInt(nums[0])<24 
    && parseInt(nums[1])>=0
    && parseInt(nums[1])<60) return true;
    return false;
}

let t="13:58";
console.log(validTime(t));