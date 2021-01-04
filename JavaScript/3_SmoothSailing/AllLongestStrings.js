function allLongestStrings(inputArray) {
 let library={};
 let longest=0;
 for (let item in inputArray){
     if (inputArray[item].length in library){
        library[inputArray[item].length].push(inputArray[item]);
     }else{
        library[inputArray[item].length]=[inputArray[item]];
     }
     if (inputArray[item].length>longest){
         longest=inputArray[item].length;
     }
 }

 console.log(library);
 console.log(longest);
}

allLongestStrings(["aba", 
"aa", 
"ad", 
"vcd", 
"aba"]);