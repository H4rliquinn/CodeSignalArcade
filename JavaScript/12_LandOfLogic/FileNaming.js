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
        if (lib[tempName]!=null){
            if (dupFlag==true){
                if (lib[names[x]]!=null){
                    retArray.push(names[x]+"("+lib[names[x]]+")");
                    lib[names[x]]++;
                } else {
                    retArray.push(names[x]+"(1)");
                    lib[names[x]]=1;
                }
            } else {
                retArray.push(tempName+"("+lib[tempName]+")");
                lib[tempName]++;
            }
        } else {
            retArray.push(tempName)
            lib[tempName]=1
        }
    }
    return retArray;
}

let n=["doc", "doc", "image", "doc(1)", "doc"];
console.log(fileNaming(n));