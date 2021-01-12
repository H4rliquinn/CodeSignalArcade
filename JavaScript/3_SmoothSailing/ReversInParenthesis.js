function reverseInParentheses(inputString) {
    let start=-1;
    let end=-1;
    let builder="";
    let queue=[];
    let rev=false;

    for (let x in inputString){
        if (inputString[x]==="("){
            queue.push(builder);
        } else if (inputString[x]===")"){

        } else if (rev===true){

        } else {
            
        }

        // console.log(inputString[x]);
    }
}

let is="(bar)";
console.log(reverseInParentheses(is));
// let is="f(bar)f";
// console.log(reverseInParentheses(is));
// let is="foo(bar(baz))blim";
//foobazrabblim
// console.log(reverseInParentheses(is2));
