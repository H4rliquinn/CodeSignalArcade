function fileNaming(names) {
    let lib={};
    let retArray=[];
    for (let x in names){
        let dupFlag=false;
        let tempName=names[x];
        if (tempName.match(/\(\d\)$/)){
            tempName=names[x].slice(0,-3);
            dupFlag=true;
        }

        if (lib[names[x]]==null){
            retArray.push(names[x])
            lib[names[x]]=1
        } else {
            if (dupFlag==true){
                if (lib[tempName]!=null){
                    if (lib[tempName]>=parseInt(names[x].slice(-2,-1))){
                        retArray.push(names[x]+"(1)");
                        lib[names[x]]=1;
                    } else {
                        retArray.push(tempName+"("+lib[tempName]+")");
                        lib[tempName]++;  
                    }   
                } else {
                    retArray.push(tempName+"(1)");
                    lib[tempName]=1;
                }
            } else {
                retArray.push(names[x]+"("+lib[names[x]]+")");
                lib[names[x]]++;
            }
        }
    }
    console.log(lib);
    return retArray;
}

let n=["doc", "doc", "image", "doc(1)", "doc"];
console.log(fileNaming(n));