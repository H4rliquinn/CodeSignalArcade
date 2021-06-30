function reachNextLevel(experience, threshold, reward) {
    if (experience+reward>=threshold){
        return true;
    } else {
        return false;
    }
}

let exp=10;
let thresh=15;
let re=5;
console.log(reachNextLevel(exp,thresh,re));