class Drop {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.2,
        }
        this.r = 5;
        this.rain = Bodies.circle(x,y,this.r,options);
        
        World.add(world, this.rain);
    }
    display() {

        var pos = this.rain.position;
        var angle = this.rain.angle;

        
        noStroke();
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x, this.rain.position.y, this.r, this.r);
    }


    actualiza(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
        }
    }


}

