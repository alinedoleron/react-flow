import React, { useCallback } from 'react';
import ReactFlow, { addEdge, Connection,useNodesState, useEdgesState,Background, Controls, ConnectionMode}from 'reactflow';

import {Square} from '../components/nodes/Square';

import 'reactflow/dist/style.css';
import DefaultEdge from './edges/DefaultEdge';

const NODE_TYPES = {
  square: Square
}

const EDGE_TYPES = {
  default: DefaultEdge
}

const initialNodes = [
  { id: '1', position: { x: 100, y: 300 }, type: 'square', data: { label: 'Node 1' } },
  { id: '2', position: { x: 300, y: 300 }, type: 'square', data: { label: 'Node 2' } },
] ;
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{type: 'default'}}
        edges={edges}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        nodeTypes={NODE_TYPES} 
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
      >
        <Background
          gap={12}
          size={2}
          color="#eee" 
          />
        <Controls/>
      </ReactFlow>

    </div>
  );
}