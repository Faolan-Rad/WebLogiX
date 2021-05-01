import { INodeOutputSlot, LGraph, LGraphCanvas, LGraphNode, LiteGraph } from "litegraph.js";

export class LogiXNode extends LGraphNode {
    FrooxEngineType:string;
    constructor() {
      super();
      this.addInput("A", "float");
      this.addInput("B", "float");
      this.addOutput("A+B", "float");
      this.properties = { precision: 1 };
    }
  
    //name to show
    title = "Sum";
    type = "float";
    //function to call when the node is executed
    onExecute() {
      var A = this.getInputData(0);
      if (A === undefined) A = 0;
      var B = this.getInputData(1);
      if (B === undefined) B = 0;
      this.setOutputData(0, A + B);
    }
    onConnectInput(
        inputIndex: number,
        outputType: INodeOutputSlot["type"],
        outputSlot: INodeOutputSlot,
        outputNode: LGraphNode,
        outputIndex: number
    ): boolean{
        return true;
    };
  }
