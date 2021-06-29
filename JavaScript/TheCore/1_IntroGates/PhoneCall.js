function phoneCall(min1, min2_10, min11, s) {
    let time=0;
    if (s>=min1){
        time+=1;
        s-=min1;
        if (s>=min2_10){
            let mins=parseInt(s/min2_10);
            if (mins>9){
                time+=9;
                s-=9*min2_10;
                if (s>=min11){
                    mins=parseInt(s/min11);
                    time+=mins;
                }
            } else {
                time+=mins;
                s-=mins*min2_10;
            }
        }
    }
    return time;
}

let min1=3;
let min2_10=1;
let min11=2;
let s=20;
console.log(phoneCall(min1,min2_10,min11,s));