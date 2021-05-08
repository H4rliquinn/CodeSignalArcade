function electionsWinners(votes, k) {
    let leader=Math.max(...votes);
    let runners=0;
    for (let x in votes){
        if (votes[x]+k>leader){
            runners++;
        }
    }
    return runners;
}

let votes=[2,3,5,2];
let k=3;

console.log(electionsWinners(votes,k));