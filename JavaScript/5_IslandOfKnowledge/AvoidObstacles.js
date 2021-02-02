function avoidObstacles(inputArray) {
 let current=0;
 let out=Math.max(...inputArray)+1;
 for (let x=2;x<=out;x++){ 
     while (current<=out){
         current+=x;
         if (current>=out) return x;
         if (inputArray.includes(current)){
            current=0;
            break;
         } 
     } 
 }
}

let ia=[5,3,6,7,9];
// console.log("ANS",avoidObstacles(ia));
ia=[2,3]
console.log("ANS",avoidObstacles(ia));