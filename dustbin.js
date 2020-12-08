class dustbin
{  
    constructor(x, y) {
    var options = {
        isStatic:true
    }
    this.x = x;
    this.y = y;
    this.angle=0;
    
    this.bottomBody=Bodies.rectangle(this.x,this.y,200,20,{isStatic : true})
    World.add(world, this.bottomBody);

    this.leftBody=Bodies.rectangle(this.x,this.y,20,100,{isStatic : true})
    World.add(world, this.leftBody);

    this.rightBody=Bodies.rectangle(this.x,this.y,20,100,{isStatic : true})
    World.add(world, this.rightBody);

  }
  display()
  {

    var posBottom=this.bottomBody.position;
	var posLeft=this.leftBody.position;
	var posRight=this.rightBody.position;

    push();
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER);
    angleMode(RADIANS)
    strokeWeight(4);
    fill(255);
    rotate(this.angle)
    rect(200,15, 20, 100);
    pop();
    rect(this.x,this.y,20,100)

    push();
    translate(posBottom.x, posBottom.y);
    rectMode(CENTER);
    strokeWeight(4);
    fill(255);
    rect(100,70, 200, 20);
    pop();

    push();
    translate(posRight.x, posRight.y);
    rectMode(CENTER);
    angleMode(RADIANS)
    strokeWeight(4);
    fill(255);
    rotate(-1 * this.angle)
    rect(10,15, 20, 100);
    pop();
    rect(this.x,this.y,20,100)
  }
};