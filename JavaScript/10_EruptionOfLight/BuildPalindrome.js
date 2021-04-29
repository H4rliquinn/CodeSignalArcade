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
            while (y!=0 && z!=st.length-1 && flag==true){
                y--;
                z++
                flag=st[y]==st[z];
                // console.log(st[y],st[z],flag);
            }
            if(flag){
                break;
            }
        }
    }
    console.log(y,z,flag);
    //Add missing characters

    // let currAdd=st.length-2;
    // let pal=false;
    // while (pal==false){
    //     pal=true;
    //     for(let x=0;x<Math.floor(st.length/2);x++){
    //         if (st[x]!=st[st.length-1-x]){
    //             // console.log(st[x],st[st.length-1-x]);
    //             pal=false;
    //             break;
    //         }
    //     }
    //     if (pal==false){
    //         if (st[currAdd+1]!=st[currAdd-1]){
    //             st=st+st[currAdd];
    //         }
    //         currAdd--;
    //         console.log(st,currAdd);
    //     }
    // }
    // return st;
}

let a="abcdcb";

console.log(buildPalindrome(a));
