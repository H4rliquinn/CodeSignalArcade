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
    let len=retVal.length;
    let dir="R";
    let nxt={"R":"D","D":"L","L":"U","U":"R"};
    
    while (curr<4){
        
        switch(dir){
            case "R":
                location["x"]++;
                retVal[location["y"]][location["x"]]=curr;
                curr++;
                if (location["x"]==len-1){
                    dir=nxt[dir];
                }
                break;
            case "D":
                break;
            case "L":
                break;
            case "U":
                break;
        }
    }

    console.log(curr,dir);
    return retVal
}


let num=3;
console.log(spiralNumbers(num));