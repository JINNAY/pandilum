class Sling{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyB = bodyB;
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }

  

    display(){
      if(this.shot.bodyA){  
        var pointA = this.shot.bodyA.position;
        var pointB = this.shot.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        length:500;
      }
    }
    
}