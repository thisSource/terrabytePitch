import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false
});
function GridDataB(props) {
  // Will only render on client-side

  let xPos;
  let yPos;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    xPos = p5.width / 2;
    yPos = p5.height / 2;
  };

  const grid = (p5, colsA, rowsA, lengthA, bool) => {
    p5.stroke(0);
    p5.strokeWeight(0.4);
    // p5.noFill();
    xPos = p5.width / 1.8 - colsA * lengthA;
    yPos = p5.height / 2 - rowsA * lengthA;

    p5.push();
    // p5.translate(p5.width/2, p5.height/2)
    for (let i = 0; i < colsA; i++) {

      for (let j = 0; j < rowsA; j++) {
        if(bool === true){
          p5.fill(255 - j*20, 170 + j*10, 250 - j)
        } else{
          p5.fill(255)
        }
        p5.rect(xPos + i * lengthA, yPos + j * lengthA, lengthA, lengthA);
      }
    }
    p5.pop();
  };

  const draw = (p5) => {
    p5.background(255, 255, 255);
    p5.stroke(100, 100, 255);
    p5.fill(230);
    grid(p5, 20, 20, 20, false);
    grid(p5, 20, 8, 20, true);

    //   p5.rect(xPos + i, yPos + j, 20, 20);
  };

  return (
    <div className="">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default GridDataB;
