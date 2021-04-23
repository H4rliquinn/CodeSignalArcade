function buildPalindrome(st) {
    let currAdd=st.length-2;
    let currString=st;
    let pal=false;

    while (pal==false){
        for(let x=0;x<Math.floor(st.length/2);x++){
            console.log(st[x],st[st.length-1-x]);
        }
        pal=true;
    }
}

let a="abcdc";

console.log(buildPalindrome(a));