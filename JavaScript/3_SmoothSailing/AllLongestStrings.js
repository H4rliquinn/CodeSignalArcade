function allLongestStrings(inputArray) {
 let library={};
 let longest=0;
 for (let item in inputArray){
     if (inputArray[item].length in library){
        library[inputArray[item].length].push(inputArray[item]);
     }else{
        library[inputArray[item].length]=[inputArray[item]];
     }
 }

 console.log(library);
}

allLongestStrings(["aba", 
"aa", 
"ad", 
"vcd", 
"aba"]);