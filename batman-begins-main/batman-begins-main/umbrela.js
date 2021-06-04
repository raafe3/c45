class Umbrela {
    constructor (x,y) {
        var options = {
        isStatic:true
        }
        this.body = Bodies.circle(x,y,50,options) 
        this.Image=loadImage("images/walking/walking_1.png");
        World.add(world, this.body);

    }
    display (){
        imageMode(CENTER)
        image (this.Image, this.body.position.x, this.body.position.y+70, 300, 300)

        
    }

}