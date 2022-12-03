const d = new Date();
let COLORS = ['blue','green','red'];
let COLOR = {Blue: 0,Green:1,Red:2 };
export class Button2{
    constructor(id,centerX,centerY,halfWidth,halfHeight){
        this.id = id;
        this.colr = COLORS[COLOR.Blue];
        this.cords = [centerX,centerY,halfWidth,halfHeight];
        this.initialTime = d.getTime();
    }
    toStr(){
        return `Button ${this.colr}, ${this.getColr()}`;
    }
    getColr(){
        if (this.colr===COLORS[COLOR.Blue]){
            let tm = d.getTime() - this.initialTime;
            return COLORS[Math.floor((tm/10))%3];
        }
        return this.colr;
    }
    hit(){
        if (this.colr===COLORS[COLOR.Blue]){
            let tm = d.getTime() - this.initialTime;
            this.colr = COLORS[Math.floor((tm/10))%3];
        }
        return (this.colr === COLORS[COLOR.Blue]);
    }
    contains(x,y){
        return (Math.abs(x-this.centerX)<2*this.halfWidth && Math.abs(y-this.centerY)<2*this.halfHeight);
    }
    draw(canvas){
        const context = canvas.getContext('2d');
        context.save();
        context.translate(this.centerX, this.centerY);
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        context.strokeRect(-this.halfWidth, -this.halfHeight, 2*this.halfWidth, 2*this.halfHeight);
        context.fillStyle = this.getColr();
        context.fillRect(-this.halfWidth, -this.halfHeight, 2*this.halfWidth, 2*this.halfHeight);
        context.restore();
    }
}