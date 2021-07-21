function lineUp(commands) {
    let retVal=0;
    let students=["F","F"]; //Right, Wrong
    //Commands
    let lefts={F:"L",R:"F",L:"B",B:"R"};
    let rights={F:"R",R:"B",L:"F",B:"L"};
    let abouts={F:"B",R:"L",L:"R",B:"F"};

    let comArray=commands.split("");
    for (let x in comArray){
        switch(comArray[x]){
            case "L":
                students[0]=lefts[students[0]];
                students[1]=rights[students[1]];
                break;
            case "R":
                students[0]=rights[students[0]];
                students[1]=lefts[students[1]];    
                break;
            case "A":
                students[0]=abouts[students[0]];
                students[1]=abouts[students[1]];
                break;
        }
        
        if (students[0]==students[1]) retVal++;
    }
    return retVal;
}

let com="LLARL";
console.log(lineUp(com));
com="RLR";
console.log(lineUp(com));