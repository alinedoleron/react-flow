import React from "react";
import {NodeProps, Handle, Position} from "reactflow";
import './Square.css';

export function Square(params:NodeProps) {
    return (
        <div style={{backgroundColor: '#5ba6cf', borderRadius: '5px',  width: '100px', height: '100px'}} >
            {params.data.label}
            <Handle
                id="right" 
                position={Position.Right}
                type={"source"}
                className={'handle handle-right'}
                />
            <Handle
                id="left"
                position={Position.Left}
                type={"source"}
                className={'handle handle-left'}
                />
            <Handle
                id="top" 
                position={Position.Top}
                type={"source"}
                className={'handle handle-top'}
                />
            <Handle
                id="bottom"
                position={Position.Bottom}
                type={"source"}
                className={'handle handle-bottom'}
                />
        </div>    
    )
        
    
}