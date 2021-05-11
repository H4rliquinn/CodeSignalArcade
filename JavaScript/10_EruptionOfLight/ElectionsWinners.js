function electionsWinners(votes, k) {
    let curLeader=[];

    let curMax=-1;
    for (let x=0;x<votes.length;x++){
        if (votes[x]>curMax){
            curMax=votes[x];
            curLeader=[votes[x]];
        } else if (votes[x]==curMax){
            curLeader.push(votes[x])
        }
    }
    if (curLeader.length>1 && k==0) return 0;

    let runners=0;
    console.log("MAX",curLeader);
    for (let x in votes){
        if (votes[x]+k>curLeader[0]){
            runners++;
        }
    }
    return runners;
}

let votes=[2,3,5,2];
let k=3;

console.log(electionsWinners(votes,k));
votes=[2,3,5,5,1];
k=0;
console.log(electionsWinners(votes,k));