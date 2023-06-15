import React from "react";
import { NodeResizer, NodeProps, Handle, Position } from "reactflow";
import "./Square.css";

export function Square({selected}: NodeProps) {
  return (
    <div
      style={{
        backgroundColor: "#5ba6cf",
        borderRadius: "5px",
        height: "100%",
        minHeight: "100px",
        minWidth: "100px",
        width: "100%",

      }}
    >
      <NodeResizer
        isVisible={selected}
        minHeight={100}
        minWidth={100}
        lineClassName={"line-resizer"}
        handleClassName={"handle-resizer"}
         />

      <Handle
        id="right"
        position={Position.Right}
        type={"source"}
        className={"handle handle-right"}
      />
      <Handle
        id="left"
        position={Position.Left}
        type={"source"}
        className={"handle handle-left"}
      />
      <Handle
        id="top"
        position={Position.Top}
        type={"source"}
        className={"handle handle-top"}
      />
      <Handle
        id="bottom"
        position={Position.Bottom}
        type={"source"}
        className={"handle handle-bottom"}
      />
    </div>
  );
}
