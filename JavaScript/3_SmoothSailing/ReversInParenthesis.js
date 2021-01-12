function reverseInParentheses(inputString) {
    let start=-1;
    let end=-1;

    for (let x in inputString){
        console.log(inputString[x]);
    }
}

let is="(bar)";
console.log(reverseInParentheses(is));
// let is="f(bar)f";
// console.log(reverseInParentheses(is));
// let is="foo(bar(baz))blim";
//foobazrabblim
// console.log(reverseInParentheses(is2));
