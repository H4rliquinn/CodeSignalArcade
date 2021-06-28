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
    let runners=0;
    if (k==0) {
        if (curLeader.length==1) {
            runners++;
        } else if (curLeader.length>1){
            return 0;
        }
    } 
    // console.log("MAX",curLeader);
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
votes=[5, 1, 3, 4, 1];
k=0;
console.log(electionsWinners(votes,k));
votes=[2, 3, 5, 2];
k=3;
console.log(electionsWinners(votes,k));