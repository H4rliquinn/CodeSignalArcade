function spiralNumbers(n) {
    let retVal=[];
    for (let x=0;x<n;x++){
        retVal.push([])
        for (let y=0;y<n;y++){
            retVal[x].push(0);
        }
    }


    let curr=1;
    let location={x:-1,y:0}
    let min=0
    let max=retVal.length;
    let dir="R";
    let nxt={"R":"D","D":"L","L":"U","U":"R"};
    
    while (curr<n**2+1){
        
        switch(dir){
            case "R":
                location["x"]++;
                retVal[location["y"]][location["x"]]=curr;
                curr++;
                if (location["x"]==max-1){
                    dir=nxt[dir];
                }
                break;
                case "D":
                    location["y"]++;
                    retVal[location["y"]][location["x"]]=curr;
                    curr++;
                    if (location["y"]==max-1){
                        dir=nxt[dir];
                        max--;
                    }
                    break;
                case "L":
                    location["x"]--;
                    retVal[location["y"]][location["x"]]=curr;
                    curr++;
                    if (location["x"]==min){
                        dir=nxt[dir];
                    }
                break;
            case "U":
                location["y"]--;
                retVal[location["y"]][location["x"]]=curr;
                curr++;
                if (location["y"]==min+1){
                    dir=nxt[dir];
                    min++;
                }
                break;
        }
    }
    return retVal
}


let num=9;
let ans=spiralNumbers(num);
for (let col in ans){
    console.log(ans[col]);
}
