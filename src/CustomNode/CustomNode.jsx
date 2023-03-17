import { Handle, Position } from "reactflow";
import { NodeResizer } from "@reactflow/node-resizer";
import TextArea from "./TextArea";

import "@reactflow/node-resizer/dist/style.css";
import styled from "styled-components";

const Node = styled.div`
  width: 100%;
  height: 100%;
`;

export default function CustomNode({
  id,
  sourcePosition = Position.Left,
  targetPosition = Position.Right,
  data,
}) {
  return (
    <Node>
      <NodeResizer isVisible={true} minWidth={180} minHeight={100} />
      <Handle style={{ opacity: 0 }} position={sourcePosition} type="source" />
      <TextArea />
      <Handle style={{ opacity: 0 }} position={targetPosition} type="target" />
    </Node>
  );
}
