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
            if (st[currAdd+1]!=st[currAdd-1]){
                st=st+st[currAdd];
            }
            currAdd--;
            console.log(st,currAdd);
        }
    }
    return st;
}

let a="abcdcb";

console.log(buildPalindrome(a));
