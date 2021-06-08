function fileNaming(names) {
    let lib={};
    let retArray=[];

    for (let x in names){
        if (lib[names[x]]!=null){
            retArray.push(names[x]+"("+lib[names[x]]+")");
            lib[names[x]]++;
        } else {
            retArray.push(names[x])
            lib[names[x]]=1
        }
    }
    console.log(lib);
    return retArray;
}

let n=["doc", "doc", "image", "doc(1)", "doc"];
console.log(fileNaming(n));