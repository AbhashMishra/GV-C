class tree {
    constructor(x,y) {
         var options ={
             isStatic : true
         }
         this.x = x;
         this.y = y;
         this.body = Bodies.rectangle(options);
         this.image = loadImage("tree.png");
         World.add(world,this.body);
    }
}