function buildPalindrome(st) {
    function testPal(a){
        for (let x=0;x<parseInt(a.length/2);x++){
            // console.log(a[x],a[a.length-x-1]);
            if (a[x]!=a[a.length-x-1]) return false;
        }
        return true;
    }

    if (testPal(st)) return st;
    
    for (let x=0;x<st.length-1;x++){
        let tempST=st;
        
        for (let y=x;y>-1;y--){
            tempST+=st[y];
        }
        if (testPal(tempST)) return tempST;
        // console.log(st[x],tempST);
        tempST=st;
    }
 
}

let a="ababab";
console.log(buildPalindrome(a));
a="abc";
console.log(buildPalindrome(a));
a="aabbaa"
console.log(buildPalindrome(a));
