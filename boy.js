class boy{
    constructor(){
       var options = {

           isStatic:true

       }


         this.body = Bodies.rectangle(300,615,100,100,options)
         this.width = 10;
         this.height= 10;
         this.image = loadImage("plucking/boy.png")
         World.add(world,this.body)


     }

      display(){
          //console.log("display")

          
          imageMode(CENTER);
          image(this.image,this.body.position.x, this.body.position.y,250,250)


      }
}