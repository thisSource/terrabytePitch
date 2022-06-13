import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false
});
function TerraTitle(props){
  // Will only render on client-side
  let movers = [];
  let attractor;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

    for (let i = 0; i < 3; i++) {
        let x = p5.random(p5.width / 2 - 200, p5.width / 2 + 200);
        let y = p5.random(p5.height / 2 - 200, p5.height / 2 + 200);
        let m = p5.random(50, 150);
        movers[i] = new Mover(p5, x, y, m);
      }
      attractor = new Attractor(p5, p5.width / 2, p5.height / 2, 50);
  };
  
  const draw = (p5) => {
    p5.background(150, 150, 150, 0.1);
 

    for (let mover of movers) {
      mover.update(p5);
      mover.show(p5);
      attractor.attract(p5, mover);
    }

    // p5.rect(0, p5.height-20, p5.width, p5.height-20)
  };
  class Attractor {
    constructor(p5, x, y, m) {
      this.pos = p5.createVector(x, y);
      this.mass = m;
      this.r = p5.sqrt(this.mass);
    }
  
    attract(p5, obj) {
      let force = window.p5.Vector.sub(this.pos, obj.pos);
      let distanceSqr = p5.constrain(force.magSq(), 100, 900);
      let G = 1;
      let strength = (G * (this.mass * obj.mass)) / distanceSqr;
      force.setMag(strength);
      obj.applyForce(force);
    }
  
    show(p5) {
      p5.fill(0, 200, 0);
      p5.ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
  }

class Mover {
    constructor(p5, x, y, m) {
      this.pos = p5.createVector(x, y);
      this.vel = window.p5.Vector.random2D();
      this.vel.mult(3);
      this.acc = p5.createVector(0, 0);
      this.mass = m;
      this.r = p5.sqrt(this.mass) * 0.5   ;
  
      this.angle = 0;
      this.angleV = 0;
      this.angleA = 0;
    }
  
    applyForce(force) {
      let f = window.p5.Vector.div(force, this.mass);
      this.acc.add(f);
    }
    update(p5) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
  
      this.angleA = this.acc.x / 500;
      this.angleV += this.angleA;
      this.angle += this.angleV;
      this.acc.set(0, 0);
    }
  
    show(p5) {
      p5.push();
      p5.translate(this.pos.x, this.pos.y);
      p5.rotate(this.angle);
      p5.noStroke()
  
      p5.fill(150,100,255,5);
      p5.ellipse(0, 0, this.r * 5);
      p5.fill(150,255,150,50);
      p5.ellipse(0, 0, this.r * 2);
    //   p5.line(0, 0, this.r, 0);
    p5.fill(0,100,255,50);
    p5.ellipse(0, 0, this.r * 1);
      p5.pop();
    }
  }
  

  
  return (
    <div className="">
      <Sketch setup={setup} draw={draw} />
    </div>
  );

  
};

export default TerraTitle;

