class tile {
    constructor(amtPossibilities) {
        this.collapsed = false;
        this.possibilities = [];
        for(let i=0;i<amtPossibilities;i++) {
            this.possibilities.push(i);
        }
    }

    getPossibilityLen() {
        return this.possibilities.length;
    }

    getCollapsed() {
        return this.collapsed;
    }

    getOptions() {
        return this.links;
    }


    collapse() {
        let randomPick = random(this.possibilities);
        this.image = cells[randomPick].getImg();
        this.links = cells[randomPick].getLinks();
        this.collapsed = true;
        // this.possibilities = [];
    }


    update(sourceLinks, side) {
        let newPos = [];
        let targetLink = sourceLinks.charAt(side);
        for(let i=0;i<this.possibilities.length;i++) {
            let variable = cells[this.possibilities[i]].getLinks();
            if(variable.charAt((side+2)%4)==targetLink) {
                newPos.push(this.possibilities[i]);
            }
        }
        this.possibilities = newPos;
    }

    getImg() {
        if(this.collapsed==true) {
            return this.image;
        }
    }
}