function fileNaming(names) {
    let lib={};
    let retArray=[];
    for (let x in names){
        let dupFlag=false;
        let baseName=names[x];
        if (baseName.match(/\(\d\)$/)){
            baseName=names[x].slice(0,-3);
            dupFlag=true;
        }
        if (baseName!=null){
            if (retArray.includes(names[x])){
                if (lib[names[x]]==null){
                    retArray.push(names[x]+"(1)");
                    lib[names[x]]=1;
                } else {
                    while (retArray.includes(names[x]+"("+lib[names[x]]+")")){
                        lib[names[x]]++;
                    }
                    retArray.push(names[x]+"("+lib[names[x]]+")");
                    lib[names[x]]++;
                }
            } else {
                retArray.push(names[x]);
                lib[names[x]]=1;
            }
        } else {
            retArray.push(names[x]);
            lib[names[x]]=1;
        }
    }
    console.log(lib);
    return retArray;
}

let n=["doc", "doc", "image", "doc(1)", "doc"];
console.log(fileNaming(n));