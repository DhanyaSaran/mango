class tree{
        constructor(){
           var options = {

               isStatic:true

           }


             this.body = Bodies.rectangle(900,350,10,10,options)
             this.image=loadImage("plucking/tree.png")
             this.image.scale = 1;
             this.width = 10;
             this.height= 10;
           
             
             World.add(world,this.body)


         }

          display(){
              imageMode(CENTER);
              image(this.image,this.body.position.x, this.body.position.y,500,650)


          }
}