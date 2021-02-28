class Hero{
constructor(x,y,r){
    var options={
        density:1,
        frictionAir:1
    }
    this.r=r
    this.image=loadImage("superman.jpeg")
    this.body=Bodies.circle(x,y,this.r,options)
    World.add(world,this.body)
}
display(){
    var heropos=this.body.position
    push()
    translate(heropos.x,heropos.y-100)
    imageMode(CENTER)
    image(this.image,0,0,this.r+150,this.r)
    pop()
}
}
