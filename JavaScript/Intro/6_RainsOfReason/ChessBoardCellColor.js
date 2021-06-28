function checkColor(num1,num2){
    if (parseInt(num1)%2==0){
        if (num2%2==0){
            return false;
        } else {
            return true;
        }
    } else {
        if (num2%2==0){
            return true;
        } else {
            return false;
        }
    }
}

function chessBoardCellColor(cell1, cell2) {
    let [c1Col,c1Row]=cell1.split('');
    let [c2Col,c2Row]=cell2.split('');
    let lib={'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8};

    return checkColor(parseInt(c1Row),lib[c1Col])==checkColor(parseInt(c2Row),lib[c2Col]);
}

let c1='A1';
let c2='C3';

console.log(chessBoardCellColor(c1,c2));

c2='H3'
console.log(chessBoardCellColor(c1,c2));
