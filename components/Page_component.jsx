import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false
});
function PageComponent(props){
  // Will only render on client-side

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };
  
  const draw = (p5) => {
    p5.background(150, 150, 150);
  };
  
  return (
    <div className="">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default PageComponent;
