import React from "react";
import ReactFlow, { ReactFlowProvider, Background, Position } from "reactflow";

import "reactflow/dist/style.css";

import CustomNode from "./CustomNode/CustomNode.jsx";

const nodes = [
  {
    id: "1",
    position: { x: 0, y: 500 },
    data: { label: "Node 1" },
    type: "resizeRotate",
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    selected: true,
    style: { width: 400, height: 600 },
  },
  {
    id: "2",
    position: { x: 500, y: 500 },
    data: { label: "Node 2" },
    type: "resizeRotate",
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    style: { width: 400, height: 600 },
  },
];

const edges = [
  {
    id: "1->2",
    source: "1",
    target: "2",
    type: "smoothstep",
  },
];

const nodeTypes = {
  resizeRotate: CustomNode,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 2, stroke: "#9ca8b3" },
  markerEnd: {
    type: "arrowclosed",
  },
};

function ReactFlowPro() {
  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      defaultNodes={nodes}
      defaultEdges={edges}
      defaultEdgeOptions={defaultEdgeOptions}
      defaultViewport={{ zoom: 1, x: 0, y: 0 }}
      fitView
      fitViewOptions={{ padding: 0.4 }}
    >
      <Background />
    </ReactFlow>
  );
}

const ReactFlowWrapper = (props) => {
  return (
    <ReactFlowProvider>
      <ReactFlowPro {...props} />
    </ReactFlowProvider>
  );
};

export default ReactFlowWrapper;
