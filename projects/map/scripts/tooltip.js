const SMALL_TEXT = 12;
const MEDIUM_TEXT = 14;
const OFFSET_Y = 20;

class Tooltip {
    position;
    country;
    co2;
    co2_per_capita;
    co2_global_share;

    constructor (position, country, co2, co2_per_capita, co2_global_share, zoom) {
        this.position = position.copy();
        this.country = country;
        this.co2 = round(co2, 1);
        this.co2_per_capita = round(co2_per_capita, 1);
        this.co2_global_share = round(co2_global_share, 1);

        if (zoom > 4) {
            this.show = this.largeLabel;
        } else if (zoom > 2) {
            this.show = this.smallLabel;
        } else {
            this.show = () => false;
        }
    }

    smallLabel () {
        fill(0);
        textSize(SMALL_TEXT);
        textAlign(CENTER);
        text(this.co2, this.position.x, this.position.y + SMALL_TEXT/2);
    }

    largeLabel () {
        textSize(MEDIUM_TEXT);
        textAlign(LEFT);

        fill(255);
        let displayHeader = this.country + ' (' + this.co2_global_share + '%)'
        let displayText = this.co2 + 'm tons, ' + this.co2_per_capita + 'tons/👤'
        let boxwidth = max(textWidth(this.country), textWidth(displayText)) + 4;
        let posX = this.position.x - boxwidth/2;
        let posY = this.position.y + OFFSET_Y;
        rect(posX, posY, boxwidth, 2 * MEDIUM_TEXT + 4);
        triangle(this.position.x, posY - 8, this.position.x - 4, posY, this.position.x + 4, posY);

        fill(0);
        text(displayHeader, posX + 2, posY + MEDIUM_TEXT);
        text(displayText, posX + 2, posY  + 2 * MEDIUM_TEXT);
    }
}