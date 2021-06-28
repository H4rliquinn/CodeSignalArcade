function sortByHeight(a) {
    let min=1000;
    let current=0;
    let swap=-1;

    while (current<a.length){
        if (a[current]!==-1){
            min=a[current];
            for (let x=current+1;x<a.length;x++){
                if (a[x]!==-1 && a[x]<min){
                    min=a[x];
                    swap=x;
                }
            }
            if (swap>-1){
                let temp=a[current];
                a[current]=a[swap];
                a[swap]=temp;
                swap=-1;
            }
        }       
        current++;
    }
    return a;

}

let a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));