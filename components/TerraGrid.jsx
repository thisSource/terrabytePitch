import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false
});
function TerraGrid(props){
  let orgWidth = 1670
  let widthAdjustor;
  let movers = [];
  let attractor;

  let xPos;
  let yPos;

  let yOff = 0;

  let gridLength = 20;




  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    widthAdjustor = p5.windowWidth / orgWidth
    let size = 170 * widthAdjustor
    xPos = p5.width / 2;
    yPos = p5.height / 2;

    for (let i = 0; i < 3; i++) {
        let x = p5.random(p5.width / 2 - size, p5.width / 2 + size);
        let y = p5.random(p5.height / 2 - size, p5.height / 2 + size);
        let m = p5.random(10, 150);
        movers[i] = new Mover(p5, x, y, m, widthAdjustor);
      }
      attractor = new Attractor(p5, p5.width / 2, p5.height / 2, 500);
  };

  const grid = (p5, colsA, rowsA, lengthA, bool) => {
    p5.stroke(0);
    p5.strokeWeight(0.2);
    p5.fill(255);
    // p5.noFill();
    xPos = p5.width / 2 - (colsA / 2) * lengthA;
    yPos = p5.height / 2 - rowsA * lengthA;

    p5.push();
    // p5.translate(p5.width/2, p5.height/2)
    for (let i = 0; i < colsA; i++) {
      for (let j = 0; j < rowsA; j++) {
        if (bool === true) {
        //   p5.fill(255 - j * 20, 170 + j * p5.random(10), 250 - j);
        } else {
        //   p5.fill(255);
        }
        p5.rect(xPos + i * lengthA, yPos + j * lengthA, lengthA, lengthA);
      }
    }
    p5.pop();
  };
  
  const draw = (p5) => {
    p5.background(255, 255, 255);
 
  
    grid(p5, 20, 20, 20, false);

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
    constructor(p5, x, y, m, scaler) {
      this.pos = p5.createVector(x, y);
      this.vel = window.p5.Vector.random2D();
      this.vel.mult(3);
      this.acc = p5.createVector(0, 0);
      this.mass = m;
      this.r = p5.sqrt(this.mass) * scaler;
  
      this.angle = 0;
      this.angleV = 0;
      this.angleA = 0;
    }
  
    applyForce(force) {
      let f = window.p5.Vector.div(force, this.mass + 500);
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
      p5.translate(this.pos.x, this.pos.y-100);
      p5.rotate(this.angle);
      p5.noStroke()
  
      p5.fill(150,100,255);
      p5.ellipse(0, 0, this.r * 3);
      p5.fill(150,255,150,200);
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

export default TerraGrid;

