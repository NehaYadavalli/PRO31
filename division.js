class Division{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = 10;
        this.h = 100;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,695,this.w,this.h);
    };
}