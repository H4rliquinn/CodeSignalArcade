function reverseInParentheses(inputString) {
    let start=-1;
    let end=-1;
    let builder="";
    let queue=[];
    let rev=0;

    for (let x in inputString){
        if (inputString[x]==="("){
            queue.push(builder);
            rev++;
        } else if (inputString[x]===")"){
            builder=queue.pop()+builder;
            rev--;
        } else if (rev){
            builder=inputString[x]+builder;
        } else {
            builder=builder+inputString[x];
        }
        // console.log(inputString[x],builder);
    }
    return builder;
}

let is="(bar)";
console.log(reverseInParentheses(is));
is="f(bar)f";
console.log(reverseInParentheses(is));
// is="foo(bar(baz))blim";
//foobazrabblim
// console.log(reverseInParentheses(is2));
