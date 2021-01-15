function reverseInParentheses(inputString) {
    let start=-1;
    let end=-1;
    let builder="";
    let queue=[];
    let rev=0;

    for (let x in inputString){
        if (inputString[x]==="("){
            queue.push(builder);
            builder="";
            rev++;
        } else if (inputString[x]===")"){
            rev--;
            if (rev>0){
                builder=reverseInParentheses("("+builder+")")+queue.pop();
                // console.log(builder,1);
            } else {
                builder=queue.pop()+builder;
                // console.log(builder,2);
            }
        } else if (rev>0){
            builder=inputString[x]+builder;
            // console.log(builder,3);
        } else {
            builder=builder+inputString[x];
            // console.log(builder,4);
        }
        // console.log(inputString[x],builder);
    }
    return builder;
}

let is="(bar)";
console.log(reverseInParentheses(is));
is="f(bar)f";
console.log(reverseInParentheses(is));
is="foo(bar(baz))blim";
console.log(reverseInParentheses(is));
console.log("foobazrabblim!");
