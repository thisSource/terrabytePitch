import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const GridDataSketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false
});
function GridData(props) {
  // Will only render on client-side

  let xPos;
  let yPos;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    xPos = p5.width/2
    yPos = p5.height/2
  };

  const grid = (p5, colsA, rowsA, lengthA) =>{
    p5.stroke(0);
    p5.strokeWeight(0.4);
    // p5.noFill();
    xPos = p5.width/1.8 - colsA  * lengthA 
    yPos = p5.height/2 - rowsA * lengthA


    p5.push()
    // p5.translate(p5.width/2, p5.height/2)
    for (let i = 0; i < colsA; i++) {
      for (let j = 0; j < rowsA; j++)
        p5.rect(xPos + i * lengthA, yPos + j*lengthA, lengthA, lengthA);
    }
    p5.pop()

  }

  const draw = (p5) => {
    p5.background(255, 255, 255);
    p5.fill(220)
    grid(p5, 10, 10, 20)

    p5.fill(100,200,255)
    grid(p5, 1, 1, 20)
  };


  return (
    <div className="">
      <GridDataSketch setup={setup} draw={draw} />
    </div>
  );
}


export default GridData;
