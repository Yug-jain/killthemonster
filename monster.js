class Monster{
    constructor(x,y,r){
        var options={
            density:5,
            frictionAir:1
        }
        this.r=r
        this.image=loadImage("monster.jpeg")
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
    display(){
        var monsterpos=this.body.position
        push()
        translate(monsterpos.x,monsterpos.y-100)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
    }