import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false
});
function Model(props) {
  // Will only render on client-side

  let posUser, posTerra
  let dotLineA = [];
  let interval = 0.9;
  let yLineDist = 0
  let dotLineAnum = 0
  let lineLength = 400


  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    posUser = p5.createVector(p5.width/2, p5.height -200);
    posTerra = p5.createVector(p5.width/2, 200);
    yLineDist = posUser.y - posTerra.y
  };

  const draw = (p5) => {
    p5.background(255);
    p5.fill(100, 200, 255);
    runLine(p5,p5.height-100, p5.height/2+100, 5, 0)  

  };

  function runLine(p5, start, stop, balls, angle){

    posUser.y = start
    posTerra.y = stop
    yLineDist = posUser.y - posTerra.y
    dotLineAnum = balls;
    angle

    //p5, xStart, yStart, xPos, yPos, targetX, targetY, angle
    if (p5.frameCount % (interval * 60) === 0) {
      if (dotLineA.length < dotLineAnum) {
        dotLineA.push(
          new Dot(
            p5,
            posUser.x,
            posUser.y,
            posUser.x,
            posUser.y,
            posTerra.x,
            posTerra.y,
            angle
          )
        );
      }
    }

    for (let i = 0; i < dotLineA.length; i++) {
      dotLineA[i].updateDotLine(p5);
      dotLineA[i].boundsDotLine(p5);
      dotLineA[i].displayDotLine(p5);
      dotLineA[i].displayStartFinish(p5);
    }
  }

  class Dot {
    constructor(p5, xStart, yStart, xPos, yPos, targetX, targetY, angle) {
      this.posOrg = p5.createVector(xStart, yStart);
      this.pos = p5.createVector(xPos, yPos);
      this.r = 5;
      this.vel = p5.createVector(angle, -1);
      this.target = p5.createVector(targetX+yLineDist*this.vel.x, targetY);
      this.xTarget = targetX

    }

    // chang qe to distance
    boundsDotLine(p5) {
      let distance = p5.dist(
        this.pos.x,
        this.pos.y,
        this.target.x,
        this.target.y
      );

      // if (this.pos.x >   this.target.x) {
      //   this.pos.x = this.posOrg.x;
      // }


      if (this.pos.y < this.target.y) {
        this.pos.y = this.posOrg.y;
        this.pos.x = this.posOrg.x;
      }
    }

    updateDotLine(p5) {
      this.pos.add(this.vel); 
      this.vel.mult(5)
      this.vel.limit(1)

    }

    displayDotLine(p5) {
      // p5.fill(0, 100, 255);
      p5.noStroke();
      p5.ellipse(this.pos.x, this.pos.y, this.r);
    }

    displayStartFinish(p5) {
      // p5.fill(20, 150, 255);
      p5.noStroke();
      p5.ellipse(this.posOrg.x, this.posOrg.y, 20);
      p5.ellipse(this.target.x, this.target.y, 20);
    }
  }

  return (
    <div className="">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default Model;
