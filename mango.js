class mango{
           constructor(x,y){
                   var options = {
                       'isStatic':true,
                       'restituation':0.8,
                       'density':1.0,
                       'friction':1.0


                   }

                      this.body = Bodies.rectangle(x,y,10,10,options);
                      this.width = 10;
                      this.height = 10;
                      this.image = loadImage("plucking/mango.png");
                      World.add(world, this.body);
           }

           
                    display(){
                     var pos = this.body.position;
                     imageMode(CENTER);
                     image(this.image,pos.x,pos.y,50,50)

                    }

        
shot(){
console.log("mango shot")
Matter.Body.setStatic(this.body,false)


}

}