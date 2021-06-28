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
 return library[longest];
}

console.log(allLongestStrings(["aba", 
"aa", 
"ad", 
"vcd", 
"aba"]));