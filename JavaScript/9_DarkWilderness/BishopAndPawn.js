function bishopAndPawn(bishop, pawn) {
    // return Math.abs(bishop[1]-pawn[1]);
    return (Math.abs(bishop.charCodeAt(0)-pawn.charCodeAt(0)));
}

let bish="a1";
let paw="c3";
console.log(bishopAndPawn(bish,paw));