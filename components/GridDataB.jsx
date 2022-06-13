import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const GridDataSketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false
});
function GridDataB(props) {
  // Will only render on client-side

  let xPos;
  let yPos;

  let gridLength = 20
  let orgWidth = 1670
  let widthAdjustor;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth/2, p5.windowHeight/2).parent(canvasParentRef);
    widthAdjustor = p5.windowWidth / orgWidth
      gridLength = gridLength * widthAdjustor
  };

  const grid = (p5, colsA, rowsA, lengthA) =>{
    p5.stroke(0);
    p5.strokeWeight(0.4);
    // p5.noFill();
    xPos = p5.width/2 - colsA/2  * lengthA 
    yPos = p5.height/2 - rowsA * lengthA

    p5.push()
    for (let i = 0; i < colsA; i++) {
      for (let j = 0; j < rowsA; j++){
        p5.rect(xPos + i * lengthA, yPos + j * lengthA, lengthA, lengthA);
      }
    }
    p5.pop()

  }

  const draw = (p5) => {
    p5.background(255, 255, 255);
    p5.fill(220)
    //p5, xPos,yPos, colsA, rowsA, lengthA
    grid(p5, 10, 10, 20)

    p5.fill(200,250,235)
    //p5, xPos,yPos, colsA, rowsA, lengthA
     grid(p5, 2, 2, 20)
  };

  return (
    <div className="">
      <GridDataSketch setup={setup} draw={draw} />
    </div>
  );
}


export default GridDataB;