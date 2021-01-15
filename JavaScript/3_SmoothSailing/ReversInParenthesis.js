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
            rev--;
            if (rev){
                console.log("rev TRUE");
                builder=builder+queue.pop();
            } else {
                builder=queue.pop()+builder;
            }
        } else if (rev){
            console.log("rev TRUE");
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
is="foo(bar(baz))blim";
console.log(reverseInParentheses(is));
//foobazrabblim
