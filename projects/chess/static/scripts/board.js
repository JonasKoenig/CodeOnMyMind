const INITIAL_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"

function Board() {

    this.squares = [];
    this.elem = document.getElementById("chessBoard");

    this.piecePositions = 0;
    this.toMove = 0;
    this.castlingRights = 0;
    this.enPassant = 0;
    this.halfMoveClock = 0;
    this.fullMoveNumber = 0;
    
    this.selectedSquare = false;

    this.initialize = function() {
        for (let rank = 7; rank >= 0; rank-=1) {        
            for (let file = 0; file < 8; file++) {
                this.squares.push(new Square(file, rank, this));
            }
        }
        this.parseFEN(INITIAL_FEN);
        this.updateBoard();
        this.draw();
    };

    this.parseFEN = function(newFEN) {
        let split = newFEN.split(" ");
        this.piecePositions = split[0];
        this.toMove = split[1];
        this.castlingRights = split[2];
        this.enPassant = split[3];
        this.halfMoveClock = split[4];
        this.fullMoveNumber = split[5];
    };

    this.updateBoard = function() {
        let index = 0;
        for (const c of this.piecePositions) {
            if (c == "/") {
                continue;
            } else if (!isNaN(c)) {
                for (let i = 0; i < Number(c); i++) {
                    this.squares[index].occupant = false;
                    index++;
                }
            } else {
                this.squares[index].occupant = new Piece(c, this);
                index++;
            }
        }
    };

    this.draw = function() {
        this.elem.innerHTML = "";
        for (let rank = 0; rank < 8; rank++) {
            const rankElem = document.createElement("div");
            rankElem.className = "rank";
            for (let file = 0; file < 8; file++) {
                const sq = this.squares[8*rank + file];
                rankElem.appendChild(sq.draw());
            }
            this.elem.appendChild(rankElem);
        }
    };

    this.clickEvent = function(square) {
        if (this.selectedSquare) {
            this.movePiece(this.selectedSquare, square);
        } else {
            this.selectSquare(square);
        }
    };

    this.selectSquare = function(square) {
        this.selectedSquare = square.occupant ? square : false; // only select if occupied
    };

    this.movePiece = function(source, target) {
        if (source == target) {
            this.selectedSquare = false; // un-select
            return;
        }
        target.occupant = source.occupant;
        source.setEmpty();
        this.selectedSquare = false;
        // this.draw();
    };
}