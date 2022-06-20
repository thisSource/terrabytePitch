import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false
});
function FundSavers(props) {
  let orgWidth = 1670
  let widthAdjustor;
  const stats = [
    270307, 283913, 223202, 258620, 278990, 305379, 308094, 398571, 425326,
    400532, 400603, 361485, 306229, 328279, 260008, 302060, 291598, 230166,
    172770, 184719, 169992, 195126, 206501, 226117, 245058, 246892, 240556,
    248565, 273837, 300742, 327898, 350616, 365281, 321738, 342829, 364196,
    378558, 393615, 370448, 339691, 284676, 269374, 233070, 193423, 185302,
    230809, 259543, 278845, 295257, 277574, 290873, 313260, 304668, 298031,
    236349, 250606, 283916, 265906, 273996, 276295, 295930, 291030, 308085,
    327575, 336739, 354640, 352503, 365788, 421135, 385614, 351621, 381136,
    365887, 369661, 403415, 422983, 457277, 472436, 484437, 479325, 484293,
    504203, 525371, 440348, 504950, 527561, 537497, 584074, 463971, 558335,
    636644, 689450, 767398, 821650, 827969, 914509, 804958
  ];

  let ratio = Math.max.apply(Math, stats) / 1000,
    l = stats.length,
    i;

  for (i = 0; i < l; i++) {
    stats[i] = Math.round(stats[i] / -ratio);
  }

  let cnv;
  let isOn = false;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    cnv = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
      widthAdjustor = p5.windowWidth / orgWidth

  };

  const draw = (p5) => {

    p5.background(255, 255, 255);
    // p5.ellipse(p5.width/2, p5.height/2,400)
    for (let i = 0; i < 200; i++) {
      p5.fill(i);
    }

    p5.noStroke();
    p5.fill(255);
    for (let i = 0; i < stats.length; i++) {
      p5.stroke(100 - i, 100 + i, 255 - i);


        cnv.mousePressed((event) => {
          if(p5.mouseX > p5.width/2){
            setIsOn()
          } else {
            setIsOff()
          }
        });


        let lineWidth = 19 * widthAdjustor


        if (isOn === true) {
          p5.strokeWeight(0.2);
          p5.line(i * lineWidth, stats[i] + p5.height, p5.mouseX, p5.mouseY);
          p5.ellipse(p5.mouseX, p5.mouseY,10)
        } else {
          p5.strokeWeight(0.8);
          p5.line(i * lineWidth, stats[i] + p5.height, (i + 3) * lineWidth, stats[i + 3] + p5.height);
        }
      p5.strokeWeight(1);
      p5.ellipse(i * lineWidth, stats[i] + p5.height, 10);
    }
    p5.fill(255);

    p5.rect(0, p5.height-20, p5.width, p5.height-20)
  };

  
  function setIsOn(){
    isOn=true
    console.log(isOn)
  }

  function setIsOff(){
    isOn=false
    console.log(isOn)
  }
 

  return (
    <div className="">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default FundSavers;
