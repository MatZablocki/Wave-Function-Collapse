class tile {
    constructor(amtPossibilities) {
        this.collapsed = false;
        this.possibilities = [];
        for(let i=1;i<=amtPossibilities;i++) {
            this.possibilities.push(i);
        }
    }

    getPossibilityLen() {
        return this.possibilities.length;
    }

    collapse() {
        let randomPick = random(this.possibilities);
        this.image = cells[randomPick-1].getImg();
        this.collapsed = true;
        this.possibilities = [];
    }

    getImg() {
        if(this.collapsed==true) {
            return this.image;
        }
    }
}