import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false
});
function LineModel(props) {
  let orgWidth = 1670;
  let widthAdjustor;
  const stats = [];
  const statsX = [];




  let cnv;
  let isOn = false;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    cnv = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    widthAdjustor = p5.windowWidth / orgWidth;

    for(let i = 0; i < 15; i++){
    stats.push(p5.random(100, 180))
  }
  };

  const draw = (p5) => {
    p5.background(255);


    p5.strokeWeight(0.5)
    p5.stroke(120, 220, 194)
    if (isOn === true) {
      p5.line(p5.width/2, p5.height - 100, p5.mouseX, p5.mouseY)
      p5.line(p5.width/2 - 30, p5.height - 180, p5.mouseX, p5.mouseY)
      p5.line(p5.width/2 + 20, p5.height - 170, p5.mouseX, p5.mouseY)
      p5.line(p5.width/2 - 60, p5.height - 150, p5.mouseX, p5.mouseY)
      p5.line(p5.width/2 + 50, p5.height - 150, p5.mouseX, p5.mouseY)
    }
    p5.strokeWeight(1.5)

    p5.fill(100,250, 200, 20)
    p5.ellipse(p5.width/2, p5.height - 100, 60)
    p5.ellipse(p5.width/2 - 30, p5.height - 180, 40)
    p5.ellipse(p5.width/2 + 20, p5.height - 170, 40)
    p5.ellipse(p5.width/2 - 60, p5.height - 150, 30)
    p5.ellipse(p5.width/2 + 50, p5.height - 150, 25)


    for (let i = 0; i < stats.length; i++) {
      p5.fill(255);
      // p5.stroke(200 - i, 100 + i, 355 - i);
      p5.stroke(100 - i*2, 100 + i*2, 255 - i);

      cnv.mousePressed((event) => {
        if (p5.mouseX > p5.width / 2) {
          setIsOn();
        } else {
          setIsOff();
        }
      });

      let lineWidth = 10 * widthAdjustor;

      if (isOn === true) {
        p5.strokeWeight(0.2);
        p5.line(40 + i * lineWidth, stats[i], p5.mouseX, p5.mouseY);
        p5.ellipse(p5.mouseX, p5.mouseY, 20);

      } else {
        p5.strokeWeight(0.2);
      }
      p5.strokeWeight(1.5);
        p5.ellipse(40 + i * lineWidth, stats[i], 10);
      
    }

    // p5.strokeWeight(3)

    // p5.line(0,p5.height,p5.width,p5.height )
  };

  function setIsOn() {
    isOn = true;
    console.log(isOn);
  }

  function setIsOff() {
    isOn = false;
    console.log(isOn);
  }

  return (
    <div className="">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default LineModel;
