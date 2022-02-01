const SQUARE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];
const SQUARE_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

function Square(file, rank, board) {

    this.file = file;
    this.rank = rank;
    this.name = SQUARE_LETTERS[file] + SQUARE_NUMBERS[rank];
    this.color = colorFromCoordinates(file, rank);
    this.occupant = false;
    this.elem = document.createElement("div");
    
    this.parentBoard = board;

    this.setEmpty = function() {
        this.occupant.setSelect(false);
        this.occupant = false;
    };

    this.draw = function() {
        this.elem.className = this.color+" square";
        this.elem.innerHTML = '';
        if (DEBUG) this.elem.innerHTML = this.name;
        if (this.occupant) this.elem.appendChild(this.occupant.draw());
        this.elem.addEventListener('click', this.click);
        this.elem.addEventListener('dragenter', this.dragEnter);
        this.elem.addEventListener('dragover', this.dragOver);
        this.elem.addEventListener('dragleave', this.dragLeave);
        this.elem.addEventListener('drop', this.drop);
        return this.elem;
    };

    this.click = function(e) {
        
    };

    this.dragEnter = function(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    };

    this.dragOver = function(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    };

    this.dragLeave = function(e) {
        e.target.classList.remove('drag-over');
    };

    this.drop = function(e) {
        e.target.classList.remove('drag-over');

        const draggedPiece = document.getElementById("draggedPiece");

        if (e.target.classList.contains('piece')) {
            e.path[1].innerHTML = '';
            e.path[1].appendChild(draggedPiece);
        } else {
            e.target.appendChild(draggedPiece);
        }
    };
}

function colorFromCoordinates(file, rank) {
    const binary = (file + rank) % 2;
    return ["black", "white"][binary];
}


