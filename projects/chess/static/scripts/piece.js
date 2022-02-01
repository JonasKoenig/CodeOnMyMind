// rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR

const fenDict = {"k": "king", "q": "queen", "r": "rook", "b": "bishop", "n": "knight", "p": "pawn"};

function Piece(fen, square, board) {
    this.fen = fen;
    this.color = fen == fen.toUpperCase() ? "white" : "black";
    this.name = this.color + "_" + fenDict[fen.toLowerCase()];
    this.asset = `static/assets/${this.name}.svg`;
    this.elem = document.createElement("div");
    this.isSelected = false;

    this.parentBoard = board;

    this.setSelect = function(bool) {
        // if (bool) this.parentBoard.selectPiece(this);
        this.isSelected = bool;
        this.elem.className = this.isSelected ? "piece selected" : "piece";
    };

    this.draw = function() {
        this.elem.className = "piece";
        this.elem.style.backgroundImage = 'url(' + this.asset + ')';
        this.elem.draggable = true;
        this.elem.addEventListener('click', this.click);
        this.elem.addEventListener('dragstart', this.dragStart);
        this.elem.addEventListener('dragend', this.dragEnd);
        return this.elem
    };

    this.click = function() {
        // this.setSelect(true);
    };

    this.dragStart = function(e) {
        e.target.id = "draggedPiece";
        
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.dropEffect = 'move';

        let dragImage = document.getElementById('transitionSquare');
        dragImage.style.backgroundImage = e.target.style.backgroundImage;
        e.dataTransfer.setDragImage(dragImage, 55, 60);


        console.log(e.target.style.backgroundImage);
        
        // document.body.style.cursor = e.target.style.backgroundImage + ", auto";

        console.log(e);

        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0.001);

    };

    this.dragEnd = function(e) {
        e.target.id = null;
        e.target.classList.remove('hide');
    };

}



