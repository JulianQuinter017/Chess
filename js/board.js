class Pieces{

    constructor(tipo, color, pos, contador){

        this._tipo = tipo;
        this._color = color;
        this._pos = pos;
        this._contador = contador;
    }
    
    set tipo(nTipo){

        this.tipo = nTipo;
    }

    get tipo(){

        return this.tipo;
    }

    set color(nColor){

        this.color = nColor;
    }

    get color(){

        return this.color;
    }

    set contador(nContador){

        this.contador = nContador;
    }

    get contador(){

        return this.contador;
    }

    set pos(nPos){

        this.pos = nPos;
    }

    get pos(){

        return this.pos;
    }
}

function main(){

    // Portfolio section nodes
    const btnReference = document.querySelector("#btnReference");
    const menu = document.querySelector('.references.collapsed');

    // Chess nodes
    const rows = document.querySelectorAll(".row");
    const squares = document.querySelectorAll(".square");

    // Painting board squares
    paintBoard(rows);
    // Creating white pieces objects
    const whitePieces = creatingWhitePiecesFun(rows);
    // Creating black pieces objects
    const blackPieces = creatingBlackPiecesFun(rows);
    // Creating a joint pieces Array
    const pieces = whitePieces.concat(blackPieces);
    // Recognizing filled squares for possible moves
    const filledSquares = squaresFilledFun(pieces);
    // Recognizing empty squares for possible moves
    const emptySquares = emptySquaresFun(rows, pieces);

    paintingPieces(rows, pieces);

    squares.forEach(item => {

        const idBoard = item.getAttribute('id');

        item.onclick = () => {

            paintBoard(rows);
            
            item.setAttribute('style','background-color: #0B7E12;');
            whitePieces.forEach(item => {

                if(filledSquares.includes(idBoard) && idBoard == item._pos){

                    const possibleMove = possibleWhiteMovesFun(emptySquares, item);

                    squares.forEach(item => {

                        const idBoardMove = item.getAttribute('id');

                        // makingAMoveTest(item, idBoard, idBoardMove, possibleMove, rows, pieces);

                    });

                }

            });
            
        }
        
    });
    
    btnReference.onclick = () =>{
    
        menu.classList.toggle('collapsed');
    }
}

main();

// function makingAMoveTest(item, idBoard, idBoardMove, possibleMove, rows, pieces){

//     var isMovementDone = false;

//     item.onclick = () => {

//         if(idBoardMove == possibleMove && isMovementDone == false){

//             makeMovement(idBoard, possibleMove, pieces);
//             paintingPieces(rows, pieces);
//             isMovementDone = true;
//         }

//         return;
//     }
// }

function paintBoard(rows){

    rows.forEach(element => {

        const classRow = element.getAttribute('class');
        const numRow = parseInt(classRow.slice(5));
        const children = element.children;
        
        if(numRow%2 == 0){
            
            for (child of children) {
                
                const square = child.getAttribute('id');

                if(square.includes('b') || square.includes('d') || square.includes('f') || square.includes('h')){

                    child.setAttribute('style','background-color: black;');
                }
                else if(square.includes('a') || square.includes('c') || square.includes('e') || square.includes('g')){

                    child.setAttribute('style','background-color: white;');
                }
            }
        }
        else if(numRow%2 != 0){

            for (child of children) {
                
                const square = child.getAttribute('id');

                if(square.includes('a') || square.includes('c') || square.includes('e') || square.includes('g')){

                    child.setAttribute('style','background-color: black;');
                }
                else if(square.includes('b') || square.includes('d') || square.includes('f') || square.includes('h')){

                    child.setAttribute('style','background-color: white;');
                }
            }
        }
            
    });
}

function creatingWhitePiecesFun(rows){

    var contador = 0;
    const wPieces = [];

    rows.forEach(element => {
        
        const children = element.children;
        
        for (child of children) {

            const idSquare = child.getAttribute('id');

            if (idSquare.includes('2')) {

                const pawn = new Pieces('Pawn','White', idSquare, contador);
                contador++;
                wPieces.push(pawn);
            }
            else if(idSquare.includes('1') && (idSquare.includes('a') || idSquare.includes('h'))){

                const tower = new Pieces('Tower','White', idSquare, contador);
                contador++;
                wPieces.push(tower);
            }
            else if(idSquare.includes('1') && (idSquare.includes('b') || idSquare.includes('g'))){

                const horse = new Pieces('Horse','White', idSquare, contador);
                contador++;
                wPieces.push(horse);
            }
            else if(idSquare.includes('1') && (idSquare.includes('c') || idSquare.includes('f'))){

                const bishop = new Pieces('Bishop','White', idSquare, contador);
                contador++;
                wPieces.push(bishop);
            }
            else if(idSquare.includes('1') && (idSquare.includes('d'))){

                const queen = new Pieces('Queen','White', idSquare, contador);
                contador++;
                wPieces.push(queen);
            }
            else if(idSquare.includes('1') && (idSquare.includes('e'))){

                const king = new Pieces('King','White', idSquare, contador);
                contador++;
                wPieces.push(king);
            }
        }

    });

    return wPieces;
}

function creatingBlackPiecesFun(rows){

    var contador = 0;
    const bPieces = [];

    rows.forEach(element => {

        const children = element.children;
        
        for (child of children) {

            const idSquare = child.getAttribute('id');

            if (idSquare.includes('7')) {

                const pawn = new Pieces('Pawn','Black', idSquare, contador);
                contador++;
                bPieces.push(pawn);
            }
            else if(idSquare.includes('8') && (idSquare.includes('a') || idSquare.includes('h'))){

                const tower = new Pieces('Tower','Black', idSquare, contador);

                var image = new Image();
                contador++;
                bPieces.push(tower);
            }
            else if(idSquare.includes('8') && (idSquare.includes('b') || idSquare.includes('g'))){

                const horse = new Pieces('Horse','Black', idSquare, contador);

                var image = new Image();
                contador++;
                bPieces.push(horse);
            }
            else if(idSquare.includes('8') && (idSquare.includes('c') || idSquare.includes('f'))){

                const bishop = new Pieces('Bishop','Black', idSquare, contador);

                var image = new Image();
                contador++;
                bPieces.push(bishop);
            }
            else if(idSquare.includes('8') && (idSquare.includes('d'))){

                const queen = new Pieces('Queen','Black', idSquare, contador);
                contador++;
                bPieces.push(queen);
            }
            else if(idSquare.includes('8') && (idSquare.includes('e'))){

                const king = new Pieces('King','Black', idSquare, contador);
                contador++;
                bPieces.push(king);
            }
        }
    });

    return bPieces;
}

function paintingPieces(rows, pieces){

    rows.forEach(element => {

        const children = element.children;

        for (child of children) {

            if(child.children.length > 0){

                child.removeChild(child.lastChild);
            }

            const idSquare = child.getAttribute('id');

            pieces.forEach(item => {

                const posPiece = item._pos;
                const typePiece = item._tipo;
                const colorPiece = item._color;

                if (posPiece == idSquare) {

                    if(colorPiece == 'White'){
                        var image = new Image();
                        image.width = 80;

                        switch (typePiece) {

                            case 'Pawn':
                                image.src = "../images/white-pawn.png";
                                break;

                            case 'Tower':
                                image.src = "../images/white-tower.png";
                                break;
                            
                            case 'Horse':
                                image.src = "../images/white-horse.webp";
                                break;

                            case 'Bishop':
                                image.src = "../images/white-bishop.png";
                                break;

                            case 'Queen':
                                image.src = "../images/white-queen.webp";
                                break;

                            case 'King':
                                image.src = "../images/white-king.webp";
                                break;

                            default:
                                console.log("NotFoundPiece");
                                break;
                        }
                    }
                    else if(colorPiece == 'Black'){

                        const posPiece = item._pos;
                        const typePiece = item._tipo;
                        
                        if (posPiece == idSquare) {

                            var image = new Image();
                            image.width = 80;

                            switch (typePiece) {

                                case 'Pawn':
                                    image.src = "../images/black-pawn.png";
                                    break;

                                case 'Tower':
                                    image.src = "../images/black-tower.png";
                                    break;
                                
                                case 'Horse':
                                    image.src = "../images/black-horse.webp";
                                    break;

                                case 'Bishop':
                                    image.src = "../images/black-bishop.webp";
                                    break;

                                case 'Queen':
                                    image.src = "../images/black-queen.webp";
                                    break;

                                case 'King':
                                    image.src = "../images/black-king.webp";
                                    break;

                                default:
                                    console.log("NotFoundPiece");
                                    break;
                            }
                        }

                    }

                    child.append(image);
                }
            });
        }
    });
}

function possibleWhiteMovesFun(emptySquares, piece){

    const piecePos = piece._pos;
    const pieceType = piece._tipo;
    const splitPosition = piecePos.split('');
    const splitPositionInt = (splitPosition[0] + parseInt(splitPosition[1]));

    switch (pieceType) {
        case 'Pawn':

            const movePawn = (splitPosition[0] + (parseInt(splitPosition[1]) + 1));
            if(emptySquares.has(movePawn)){

                return movePawn;
            }
            break;
    
        default:
            break;
    }

}

function emptySquaresFun(rows, pieces){

    const freeSquares = new Set();
    const takenSquares = new Set();
    
    pieces.forEach(element => {

        takenSquares.add(element._pos);
    });

    rows.forEach(element => {
        
        const children = element.children;

        for (child of children) {

            const idSquare = child.getAttribute('id');

            if(!takenSquares.has(idSquare)){

                freeSquares.add(idSquare);
            }
            
        }

    });

    return freeSquares;
}

function squaresFilledFun(pieces){

    let sFilled = [];

    pieces.forEach(element => {
        
        sFilled.push(element._pos);
    });

    return sFilled;
}

function makeMovement(idBoard, possibleMove, pieces){

    pieces.forEach(element => {
        
        const idPiece = element._pos;

        if(idPiece == idBoard){

            element._pos = possibleMove;
        }
    });
}