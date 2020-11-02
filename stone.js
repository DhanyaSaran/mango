class stone{
  constructor(x,y){
                  var options = {
                       isStatic:false,
                   'restitution':0,
                   'friction':1.0,
                   'density:':1.2

                  }
                  this.body = Bodies.rectangle(x,y,10,10,options);
                  this.width = 10;
                  this.height = 10;
                  this.image = loadImage("plucking/stone.png")
                  World.add(world,this.body)


           }

           display(){

                var pos = this.body.position
                imageMode(CENTER);
                image(this.image,pos.x,pos.y,65,65)

           }

}