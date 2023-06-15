import React from 'react';
import { EdgeProps, getSmoothStepPath } from 'reactflow';

import './DefaultEdge.css';

export default function DefaultEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
      id={id}
      // style={style}
      className='react-flow__edge-path stroke'
      d={edgePath}
      markerEnd={markerEnd}
      />
    </>
  );
}
