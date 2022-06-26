import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false
});
function GridDataFloater(props) {
  // Will only render on client-side

  let xPos;
  let yPos;

  let yOff = 0;

  let gridLength = 20;
  let orgWidth = 1670;
  let widthAdjustor;

  let gravity;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    gravity = p5.createVector(0.03, 0.05);

    xPos = p5.width / 2;
    yPos = p5.height / 2;
    widthAdjustor = p5.windowWidth / orgWidth;
    gridLength = gridLength * widthAdjustor;
  };

  const grid = (p5, colsA, rowsA, lengthA, bool) => {
    p5.stroke(0);
    p5.strokeWeight(0.2);
    // p5.noFill();
    xPos = p5.width / 2 - (colsA / 2) * lengthA;
    yPos = p5.height / 2 - rowsA * lengthA;

    p5.push();
    // p5.translate(p5.width/2, p5.height/2)
    for (let i = 0; i < colsA; i++) {
      for (let j = 0; j < rowsA; j++) {
        if (bool === true) {
          p5.fill(255 - j * 20, 170 + j * p5.random(10), 250 - j);
        } else {
          p5.fill(255);
        }
        p5.rect(xPos + i * lengthA, yPos + j * lengthA, lengthA, lengthA);
      }
    }
    p5.pop();
  };

  function showSurf(p5, level) {
    // p5.fill(0, 0, 255, 20);
    p5.noFill();
    p5.strokeWeight(3);

    p5.beginShape();
    let xOff = 0;
    for (let x = p5.width / 4; x <= p5.width - p5.width / 4; x += 15) {
      p5.stroke(112, 137, 255);

      let y = p5.map(p5.noise(xOff, yOff), 0, 1, 170, 260);
      p5.vertex(x, y);
      // Increment x dimension for noise
      xOff += 0.01 + level;
    }
    // increment y dimension for noise
    yOff += 0.01;

    p5.endShape();
  }

  const draw = (p5) => {
    p5.background(255, 255, 255);
    p5.stroke(120, 220, 194);
    p5.fill(230);
    grid(p5, 15, 15, 20, false);
    showSurf(p5, 0.05);
    //   p5.rect(xPos + i, yPos + j, 20, 20);
  };

  return (
    <div className="">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default GridDataFloater;
