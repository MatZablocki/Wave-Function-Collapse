
class cell {
    
    constructor(img, links) {
        this.img = img;
        this.links = links;
        this.linkLen = links.length;
    }

    getImg() {
        return this.img;
    }

    rotate(num) {
        let newLinks = "";
        for(let i=0;i<this.linkLen;i++) {
            let linkAt;
            let j = i%this.linkLen;
            
            linkAt = this.links.charAt(j);
            newLinks += linkAt;
        }
        this.links = newLinks;

        let w = this.img.width;
        let h = this.img.height;
        let newImg = createGraphics(w,h);
        newImg.imageMode(CENTER);
        newImg.translate(w/2,h/2);
        newImg.rotate(HALF_PI*num);
        newImg.image(this.img,0,0);

        console.log(newLinks);
        
        return new cell(newImg,newLinks);
    }
}