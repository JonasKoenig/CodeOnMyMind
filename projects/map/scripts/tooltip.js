const SMALL_TEXT = 12;
const MEDIUM_TEXT = 14;
const OFFSET_Y = 20;

class Tooltip {
    position;
    country;
    co2;
    co2_per_capita;
    co2_global_share;

    constructor(position, index) {
        this.position = position.copy();

        let data = co2Data.rows[index].obj;
        this.country = data.country;
        this.co2 = round(data.co2, 1);
        this.co2_per_capita = round(data.co2_per_capita, 1);
        this.co2_global_share = round(data.co2_global_share, 1);

        let zoom = worldMap.zoom()
        if (zoom > 4) {
            this.show = this.largeLabel;
        } else if (zoom > 2) {
            this.show = this.smallLabel;
        } else {
            this.show = () => false;
        }
    }

    smallLabel() {
        fill(0);
        textSize(SMALL_TEXT);
        textAlign(CENTER);
        text(this.co2, this.position.x, this.position.y + SMALL_TEXT / 2);
    }

    largeLabel() {
        textSize(MEDIUM_TEXT);
        textAlign(LEFT);

        fill(150);
        let line1 = this.country + ' (' + this.co2_global_share + '%)\n';
        let line2 = this.co2 + ' million tons\n';
        let line3 = this.co2_per_capita + ' tons/capita'

        let boxwidth = max([textWidth(line1), textWidth(line2), textWidth(line3)]);
        let boxheight = 2 * textLeading() + MEDIUM_TEXT + 4

        let posX = this.position.x - boxwidth / 2;
        let posY = this.position.y + OFFSET_Y;

        rect(posX, posY, boxwidth, boxheight);
        triangle(this.position.x, posY - 8, this.position.x - 4, posY, this.position.x + 4, posY);

        fill(255);
        text(line1 + line2 + line3, posX + 2, posY + MEDIUM_TEXT);
    }
}