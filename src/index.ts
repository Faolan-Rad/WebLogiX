import { LGraph, LGraphCanvas, LGraphNode, LiteGraph } from "litegraph.js";
var LGcanvas:LGraphCanvas;
const canvas = document.getElementById("mycanvas");
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error(
    `The element of id "mycanvas" is not a HTMLCanvasElement. Make sure a <canvas id="mycanvas"> element is present in the document.`
  );
}

window.addEventListener("load", () => {
  canvas.height = window.innerHeight - 20;
  canvas.width = window.innerWidth - 20;
  var graph = new LGraph();

  LGcanvas = new LGraphCanvas(canvas, graph);
  LiteGraph.clearRegisteredTypes();
  //register in the system
  
  graph.start();
});
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight - 20;
  canvas.width = window.innerWidth - 20;
});

//keyBindings
window.addEventListener("keydown", (key) => {
  if(key.key == "Delete"||key.key == "Backspace"){
    LGcanvas.deleteSelectedNodes();
  }
});
