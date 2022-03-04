const SMALL_TEXT = 12;
const MEDIUM_TEXT = 14;
const LARGE_TEXT = 16;

class Tooltip {
    position;
    header;
    text;

    constructor (position, header, text) {
        this.position = position.add(createVector(0, 20));
        this.header = header;
        this.text = text;
    }

    show (zoom) {
        if (zoom > 4) {
            this.mediumLabel();
        } else if (zoom > 2) {
            this.smallLabel();
        }
    }

    smallLabel () {
        fill(0);
        textSize(SMALL_TEXT);
        textAlign(CENTER);
        text(this.text, this.position.x, this.position.y + SMALL_TEXT);
    }

    mediumLabel () {
        textSize(MEDIUM_TEXT);
        textAlign(LEFT);

        fill(0, 200);
        let displayText = this.text + ' t'
        let boxwidth = max(textWidth(this.header), textWidth(displayText)) + 4;
        let positionX = this.position.x - boxwidth/2
        rect(positionX, this.position.y, boxwidth, 2 * MEDIUM_TEXT + 4);

        fill(255);
        text(this.header, positionX + 2, this.position.y + MEDIUM_TEXT);
        text(displayText, positionX + 2, this.position.y + 2 * MEDIUM_TEXT);
    }
}