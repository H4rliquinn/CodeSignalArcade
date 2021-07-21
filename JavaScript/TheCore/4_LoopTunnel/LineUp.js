function lineUp(commands) {
    let retVal=0;
    let comArray=commands.split("");
    for (let x in comArray){
        console.log(comArray[x]);
    }
}

let com="LLARL";
console.log(lineUp(com));