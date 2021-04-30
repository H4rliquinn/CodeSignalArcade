function buildPalindrome(st) {
    //Find Existing Middles
    let y,z,flag;
    for (let x=1;x<st.length-1;x++){
        console.log(st[x-1],st[x+1]);
        if (st[x-1]==st[x+1]){
            //Found a middle
            //Check if middle goes to end
            y=x-1;
            z=x+1;
            flag=true;
            while (y!=-1 && z!=st.length-1 && flag==true){
                y--;
                z++
                flag=st[y]==st[z];
                console.log(st[y],st[z],flag);
            }
            if(flag){
                break;
            }
        }
    }
    // console.log(y,z,flag);
    //Add missing characters
    while (y>0){
        y--;
        st+=st[y];
    }
    return st;
}

let a="ababab";

console.log(buildPalindrome(a));
