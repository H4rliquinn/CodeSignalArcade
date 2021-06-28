function bishopAndPawn(bishop, pawn) {
    return (Math.abs(bishop.charCodeAt(0)-pawn.charCodeAt(0))==Math.abs(bishop[1]-pawn[1]));
}

let bish="a1";
let paw="c3";
console.log(bishopAndPawn(bish,paw));
bish="h1";
paw="h3";
console.log(bishopAndPawn(bish,paw));
