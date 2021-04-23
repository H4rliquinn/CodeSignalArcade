function buildPalindrome(st) {
    let currAdd=st.length-2;
    let pal=false;

    while (pal==false){
        pal=true;
        for(let x=0;x<Math.floor(st.length/2);x++){
            if (st[x]!=st[st.length-1-x]){
                // console.log(st[x],st[st.length-1-x]);
                pal=false;
                break;
            }
        }
        if (pal==false){
            st=st+st[currAdd];
            currAdd--;
            // console.log(st);
        }
    }
    return st;
}

let a="abcdc";
console.log(buildPalindrome(a));
a="abcdc";
console.log(buildPalindrome(a));
a="abcdc";
console.log(buildPalindrome(a));