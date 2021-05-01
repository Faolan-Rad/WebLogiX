import { LGraph, LGraphCanvas, LiteGraph } from "litegraph.js";
const canvas = document.getElementById("mycanvas");
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error(`The element of id "mycanvas" is not a HTMLCanvasElement. Make sure a <canvas id="mycanvas"> element is present in the document.`);
}
window.addEventListener("load", () => {
  canvas.height = window.innerHeight-20;
  canvas.width = window.innerWidth-20;
  var graph = new LGraph();

  var LGcanvas = new LGraphCanvas(canvas, graph);
  LiteGraph.clearRegisteredTypes();

  
  graph.start()
  
});
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight-20;
  canvas.width = window.innerWidth-20;
});
